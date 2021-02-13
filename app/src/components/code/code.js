import React, { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import CodeBlock from './code-block';
import ButtonPair from '../button-pair';
import data from '../../data';

function CodeView({
  darkMain,
  lightMain,
  otherMain,
  darkPrivate,
  lightPrivate,
  otherPrivate,
  theme,
  sidebarType,
  sidebarWidth,
  sidebarCollapsedWidth,
  includes,
  general,
}) {
  let files = ['config.css', 'tree-style-tab.css'];
  const [currentFile, setCurrentFile] = useState(0);
  let syntaxHighlightStyle = data.syntaxHighlight(
    theme.dark,
    theme.darkPalette,
    theme.light,
    theme.other.accent,
    theme.other.yellow,
    theme.other.green,
    theme.other.red
  );
  let includeSidebarType = data.configSidebarType(sidebarType);
  let includeExtensionIcons = includes.extensionIcons
    ? data.includeExtensionIcons
    : '';
  let includeHideTabline = includes.hideTabline ? data.includeHideTabline : '';
  let includeWindowControls = includes.windowControls
    ? data.includeWindowControls(includes.hideTabline)
    : '';
  let includeWindowControlsWindowsPatch =
    includes.windowControls && includes.windowControlsWindowsPatch
      ? data.includeWindowControlsWindowsPatch
      : '';
  let mainColors = data.configColors(
    darkMain.color,
    darkMain.palette,
    lightMain.color,
    lightMain.palette,
    otherMain.accent,
    otherMain.yellow,
    otherMain.green,
    otherMain.red,
    darkMain.mask
  );
  let configMain = data.configMain(sidebarWidth, sidebarCollapsedWidth);
  let privateColors = data.configColors(
    darkPrivate.color,
    darkPrivate.palette,
    lightPrivate.color,
    lightPrivate.palette,
    otherPrivate.accent,
    otherPrivate.yellow,
    otherPrivate.green,
    otherPrivate.red,
    darkPrivate.mask
  );
  console.log('privateColors:', privateColors);
  console.log(darkMain.mask);
  let config = `/* order of these files is important and should not be changed */

${includeExtensionIcons}${includeWindowControls}${includeWindowControlsWindowsPatch}${includeHideTabline}${includeSidebarType}
:root { ${mainColors}
    ${configMain}\n
  ${data.configDividers(general.dividerWidth)}
    ${data.configUnset}
}

:root[privatebrowsingmode="temporary"]{ ${privateColors} 
}`;
  let configTST = `
:root{ ${mainColors}
}

:root.incognito{ ${privateColors}
}

${data.configTST(sidebarCollapsedWidth)}
    `;

  return (
    <VStack padding="8" w="90%" spacing="4" m="0 auto" fontFamily="monospace">
      <ButtonPair
        styles={{ mb: '2' }}
        content={files}
        bgSelected={[theme.darkPalette[1], theme.darkPalette[2]]}
        color={{ selected: theme.light, regular: theme.dark }}
        selected={currentFile}
        onClick={setCurrentFile}
      />
      {currentFile === 0 ? (
        <CodeBlock
          dark={theme.dark}
          darkPalette={theme.darkPalette}
          light={theme.light}
          style={syntaxHighlightStyle}
          code={config}
          name="config.css"
        />
      ) : (
        <CodeBlock
          dark={theme.dark}
          darkPalette={theme.darkPalette}
          light={theme.light}
          style={syntaxHighlightStyle}
          code={configTST}
          name="tree-style-tab.css"
        />
      )}
    </VStack>
  );
}

export default CodeView;
