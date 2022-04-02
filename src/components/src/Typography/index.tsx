import OriginTypography from './Typography';
import Title from './Title';
import Paragraph from './Paragraph';

type Typography = typeof OriginTypography & {
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};

const Typography = OriginTypography as Typography;
Typography.Title = Title;
Typography.Paragraph = Paragraph;

export default Typography;
