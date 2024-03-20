import React from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  NavTitle: Field<string>;
}

type NavigationProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const SXADemoPageNavigationDefaultComponent = (props: NavigationProps): JSX.Element => (
  <div className={`component my-component ${props.params.styles}`}>
    <div className="component-content">
    <span className="is-empty-hint">No Datasource Present</span>
    </div>
  </div>
);

export const Default = (props: NavigationProps): React.JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div
        className={`component my-component ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <Text className="text-white bg-black" field={props.fields.NavTitle} />
      </div>
    );
  }

  return <SXADemoPageNavigationDefaultComponent {...props} />;
};


export const NegativeDisplay = (props: NavigationProps): React.JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div
        className={`component my-component text-white bg-black ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <Text className="text-white bg-black" field={props.fields.NavTitle} />
      </div>
    );
  }

  return <SXADemoPageNavigationDefaultComponent {...props} />;
};