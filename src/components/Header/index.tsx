import { NavLink } from "react-router-dom";
import { Scroll, Timer } from "phosphor-react";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <NavLink to="/" title="Timer">
        <img src={logoImg} />
      </NavLink>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  );
};
