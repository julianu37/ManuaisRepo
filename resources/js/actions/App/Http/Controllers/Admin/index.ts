import DashboardController from './DashboardController'
import BrandController from './BrandController'
import PrinterModelController from './PrinterModelController'
import ManualController from './ManualController'
const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
BrandController: Object.assign(BrandController, BrandController),
PrinterModelController: Object.assign(PrinterModelController, PrinterModelController),
ManualController: Object.assign(ManualController, ManualController),
}

export default Admin