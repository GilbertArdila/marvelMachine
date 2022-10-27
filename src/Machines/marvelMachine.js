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
        error:''
    },
    states:{
        home:{
            on:{
                CHARACTER:{
                    target:'selectedCharacter'
                },
                SETFAVORITES:{
                    target:'home',
                    actions:'setFavorites'
                },
                FAVORITES:{
                   target:'favotitesCharacters'
                },
                DELETE:{
                    target:'home',
                    actions:' deleteFavorite'
                }
            },
            ...fillCharacters
        },
        selectedCharacter:{
            on:{
                BACK:{
                    target:'home'
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
    deleteFavorite:assign((id)=>{
      const index=  context.favorites.findIndex(index=>index===id);
      return context.splice(index,1)
    })
 }
}

)

export{marvelMachine}