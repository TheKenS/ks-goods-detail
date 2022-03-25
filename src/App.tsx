import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GoodsDetailPage } from "@/pages/";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/goodsDetail/:goodsId" component={GoodsDetailPage} />
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
