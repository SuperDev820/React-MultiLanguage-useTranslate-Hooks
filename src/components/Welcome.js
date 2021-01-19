import React from "react";
import { withTranslation } from "react-i18next";

// use hoc for class based components
function Welcome(props) {
  
    const { t } = props;
    return <h2>{t('title')}</h2>;
};

export default withTranslation()(Welcome);
