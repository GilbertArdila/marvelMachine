import {createMachine,assign} from 'xstate';
import {getCharacters} from '../Utils/api';

const fillCharacters={
    initial:'loading',
    states:{
        loading:{
            invoke:{
                id:'getMarvelCharacters',
                src:()=>getCharacters,
                onDone:{
                    target:'success',
                    actions:assign({
                        characters:(context,event)=>event.data
                    })
                },
                onError:{
                    target:'failure',
                    actions:assign({
                        error:'Falló request'
                    })
                }
            }
        },
        success:{},
        failure:{
            on:{
                RETRY:{target:'loading'}
            }
        }
    }
}
const marvelMachine=createMachine({
    id:'whatch marvel characters',
    initial:'home',
    context:{
        characters:[],
        favorites:[],
        selectedCharacter:[],
        error:''
    },
    states:{
        home:{
            on:{
                CHARACTER:{
                    target:'selectedCharacter',
                    actions:'addSelectedCharacter'
                },
                SETFAVORITES:{
                    target:'home',
                    actions:'setFavorites'
                },
                FAVORITES:{
                   target:'favotitesCharacters'
                }
                
            },
            ...fillCharacters
        },
        selectedCharacter:{
            on:{
                BACK:{
                    target:'home',
                    actions:'deleteSelectedCharacter'
                }
            }
        },
        favotitesCharacters:{
            on:{
                BACK:{
                    target:'home'
                }
            }
        }
    },
    
},
{
    actions:{
    setFavorites:assign(
        (context,event)=>context.favorites.push(event.newFavorite)
        
    ),
    addSelectedCharacter:assign(
       (context,event)=>context.selectedCharacter.push(event.myCharacter)
    ),
    deleteSelectedCharacter:assign((context)=> {
        context.selectedCharacter=[]
    })
 }
}

)

export{marvelMachine}