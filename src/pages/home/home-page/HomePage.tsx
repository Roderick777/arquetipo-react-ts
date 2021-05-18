
import './HomePage.scss'
import MenuHomeComponent from "../../../components/menu-home-component/MenuHomeComponent"
import BannerHomeComponent from "./components/BannerHomeComponent"

const HomePage = (): JSX.Element => (
    <div className="HomePage">
      <MenuHomeComponent />
      <BannerHomeComponent />
    </div>
)

export default HomePage