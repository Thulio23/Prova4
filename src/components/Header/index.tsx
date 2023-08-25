import * as S from "./styles"
import { IPage } from "../../App"

export function Header({ setPage }: IPage){
  return (
    <><S.Header>
          <p>Inovando na Tecnologia</p>
      </S.Header>
      <S.NavBar>
              <p>Notícias</p>
              <p>Tópicos</p>
              <p>Descrição</p>
          </S.NavBar></>
  )
  }