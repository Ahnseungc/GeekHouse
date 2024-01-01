import { useEffect } from "react";
import { useMonaco } from "@monaco-editor/react";
import { Editor } from "@monaco-editor/react";
import NightTheme from "monaco-themes/themes/GitHub Dark.json";
import LightTheme from "monaco-themes/themes/GitHub Light.json";
import { MonacoEditorProps } from "@/types/db";

const MonacoEditor = ({ currentTheme }: MonacoEditorProps) => {
  const monaco = useMonaco();

  useEffect(() => {
    if (!monaco) return;

    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    monaco.editor.defineTheme("dark", NightTheme);
    monaco.editor.defineTheme("light", LightTheme);

    monaco.editor.setTheme("dark");
    monaco.editor.setTheme("light");
  }, [monaco]);

  return (
    <>
      <Editor
        theme={currentTheme ? "dark" : "light"}
        height="100vh"
        width="50vw"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </>
  );
};

export default MonacoEditor;
