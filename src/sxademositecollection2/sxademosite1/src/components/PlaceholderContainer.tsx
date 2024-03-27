import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

const PlaceholderContainer = (props: ComponentProps): JSX.Element => {
  return (
    <>
      <Placeholder name="placeholderdemo" rendering={props.rendering} />
    </>
  );
};

export default PlaceholderContainer;
