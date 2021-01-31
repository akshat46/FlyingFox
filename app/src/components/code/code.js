import React, { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import CodeBlock from './code-block';
import ButtonPair from '../button-pair';
import data from '../../data';

function CodeView({
  darkPalette,
  lightPalette,
  dark,
  light,
  red,
  yellow,
  green,
  accent,
  sidebarType,
  sidebarWidth,
  sidebarCollapsedWidth,
}) {
  let files = ['config.css', 'tree-style-tab.css', 'window-controls'];
  const [currentFile, setCurrentFile] = useState(0);
  let syntaxHighlightStyle = data.syntaxHighlight(
    dark,
    darkPalette,
    light,
    accent,
    yellow,
    green,
    red
  );
  let includeSidebarType = data.configSidebarType(sidebarType);
  let configColors = data.configColors(
    dark,
    darkPalette,
    light,
    lightPalette,
    accent,
    yellow,
    green,
    red
  );
  let configMain = data.configMain(sidebarWidth, sidebarCollapsedWidth);
  let config = `${includeSidebarType}
:root { ${configColors}
    ${configMain}
}`;

  return (
    <VStack
      padding="8"
      w="90%"
      spacing="4"
      m="0 auto"
      mt={2}
      fontFamily="monospace"
    >
      <ButtonPair
        content={files}
        bgSelected={[darkPalette[1], darkPalette[2]]}
        color={{ selected: light, regular: dark }}
        selected={currentFile}
        onClick={setCurrentFile}
      />
      <CodeBlock
        dark={dark}
        darkPalette={darkPalette}
        light={light}
        style={syntaxHighlightStyle}
        code={config}
        name="config.css"
      />
    </VStack>
  );
}

export default CodeView;
