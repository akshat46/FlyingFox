import { useClipboard, useToast, Box, VStack } from '@chakra-ui/react';
import { RiDownload2Fill, RiFileCopy2Fill } from 'react-icons/ri';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import ButtonPair from '../button-pair';
SyntaxHighlighter.registerLanguage('css', css);

function CodeBlock({ dark, darkPalette, light, style, code, name }) {
  const { onCopy } = useClipboard(code);
  const downloadFile = () => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = name;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  const toast = useToast();
  return (
    <>
      <VStack
        bg={dark}
        p="8"
        spacing="0"
        fontSize="sm"
        borderRadius="lg"
        boxShadow="dark-lg"
      >
        <Box mb="-16" alignSelf="end">
          <ButtonPair
            styles={{ mb: '8' }}
            content={[RiDownload2Fill, RiFileCopy2Fill]}
            bgSelected={[darkPalette[1], darkPalette[2]]}
            hoverBg={darkPalette[2]}
            color={{ selected: light, regular: light }}
            selected={1}
            onClick={i => {
              if (i === 1)
                toast({
                  title: `${name} copied to clipboard.`,
                  description: '',
                  status: 'success',
                  duration: 2000,
                });
              return i === 1 ? onCopy() : downloadFile();
            }}
            icon
          />
        </Box>
        <SyntaxHighlighter
          wrapLines={true}
          wrapLongLines={true}
          language="css"
          style={style}
        >
          {code}
        </SyntaxHighlighter>
      </VStack>
    </>
  );
}

export default CodeBlock;
