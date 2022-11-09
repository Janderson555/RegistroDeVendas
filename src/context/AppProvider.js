import PropTypes from 'prop-types'
import { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ children }) {
  const INITIAL_STATE = {};
  const [data, setData] = useState(INITIAL_STATE);

  return (
    <AppContext.Provider
    value={ {
      data,
      setData
    } }
    >
      { children }
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
