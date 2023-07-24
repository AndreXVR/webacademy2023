import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function ListagemProdutos() {
  const produto = useSelector((state: RootState) => state.produto);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {produto.produtos.map((produto) => {
            return (
              <tr>
                <th>{produto.nome}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
