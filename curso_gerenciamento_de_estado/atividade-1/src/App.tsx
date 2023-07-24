import { useEffect} from 'react';
import './App.css'
import { useDispatch} from "react-redux";
import ListagemProdutos from './components/listProdutos';
import FormularioProdutos from './components/formProdutos';
import { fetchProdutos } from './redux/features/produto.slice';
import { AppDispatch } from './redux/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  //const count = useSelector((state: RootState) => state.count);

  useEffect(() => {
    dispatch(fetchProdutos());
  });

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
    }}>
      <div>
        <FormularioProdutos/>
      </div>
      <div style={{ width: "50%" }}>
        <ListagemProdutos />
      </div>
    </div>
  )
}

export default App;
