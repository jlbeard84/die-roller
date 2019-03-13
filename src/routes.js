import Dice from './components/Dice.vue';
import Coin from './components/Coin.vue';
import App from './App.vue';

const routes = [ 
    {
        path: '*',
        component: App,
        children: [
            { 
                path: '',
                component: Dice
            },
            {
                path: 'coin',
                component: Coin
            }
        ]
    }
];

export default routes;