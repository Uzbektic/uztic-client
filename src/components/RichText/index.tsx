import React from 'react';

interface RichTextRendererProps {
  htmlContent?: string | TrustedHTML;
  style?: React.CSSProperties;
  classNames?: string;
}

export const RichTextRenderer: React.FC<RichTextRendererProps> = ({
  htmlContent,
  style = {},
  classNames = '',
}) => {
  return (
    <p
      className={classNames}
      dangerouslySetInnerHTML={{ __html: htmlContent ? htmlContent : '' }}
      style={style}
    />
  );
};
