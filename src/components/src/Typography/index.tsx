import OriginTypography from './Typography';
import Title from './Title';

type Typography = typeof OriginTypography & {
  Title: typeof Title;
};

const Typography = OriginTypography as Typography;
Typography.Title = Title;

export default Typography;
