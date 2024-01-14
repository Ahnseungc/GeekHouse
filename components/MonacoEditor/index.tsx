import { useEffect } from "react";
import { useMonaco } from "@monaco-editor/react";
import { Editor } from "@monaco-editor/react";
import NightTheme from "monaco-themes/themes/GitHub Dark.json";
import LightTheme from "monaco-themes/themes/GitHub Light.json";
import { MonacoEditorProps } from "@/types/db";
import { useCallback } from "react";

interface type {
  name: string;
  Theme: Object;
}

const MonacoEditor = ({ currentTheme }: MonacoEditorProps) => {
  const monaco = useMonaco();
  const setTheme = useCallback(
    (Name: string, Theme: object) => {
      monaco.editor.defineTheme(Name, Theme);
      monaco.editor.setTheme(Name);
    },
    [monaco]
  );

  useEffect(() => {
    if (!monaco) return;
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    setTheme("dark", NightTheme);
    setTheme("light", LightTheme);
  }, [monaco]);

  return (
    <>
      <Editor
        theme={currentTheme ? "dark" : "light"}
        height="100vh"
        width="50vw"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        options={{
          fontSize: 15,
          minimap: { enabled: false },
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
          },
        }}
      />
    </>
  );
};

export default MonacoEditor;
