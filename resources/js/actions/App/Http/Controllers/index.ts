import SearchController from './SearchController'
import ManualViewController from './ManualViewController'
import Admin from './Admin'
import Settings from './Settings'
const Controllers = {
    SearchController: Object.assign(SearchController, SearchController),
ManualViewController: Object.assign(ManualViewController, ManualViewController),
Admin: Object.assign(Admin, Admin),
Settings: Object.assign(Settings, Settings),
}

export default Controllers