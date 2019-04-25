import { app } from 'hyperapp'
// import actions from './actions'
// import view from './components/Counter'
import { Store } from './models/store'
import App from './containers/App'
import '../styles/app'

const appArgs = [Store.state, Store.actions, App, document.body]

function onMount(main) {
  console.log('Initial state:')
  console.log(main)
}

let main;

if (process.env.NODE_ENV !== 'production') {
  import('hyperapp-redux-devtools').then((devtools) => {
    main = devtools(app)(...appArgs)
    onMount(main)
  });
} else {
  main = app(...appArgs)
  onMount(main)
}
