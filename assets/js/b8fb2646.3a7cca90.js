"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[636],{25537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var o=n(87462),a=(n(67294),n(3905)),r=n(50214),p=n(58764);const s={title:"Appbar"},c=void 0,i={unversionedId:"components/Appbar/Appbar",id:"components/Appbar/Appbar",title:"Appbar",description:"A component to display action items in a bar. It can be placed at the top or bottom.",source:"@site/docs/components/Appbar/Appbar.mdx",sourceDirName:"components/Appbar",slug:"/components/Appbar/",permalink:"/react-native-paper/docs/components/Appbar/",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Appbar/Appbar.tsx",tags:[],version:"current",frontMatter:{title:"Appbar"},sidebar:"components",previous:{title:"ActivityIndicator",permalink:"/react-native-paper/docs/components/ActivityIndicator"},next:{title:"Appbar.Action",permalink:"/react-native-paper/docs/components/Appbar/AppbarAction"}},l={},m=[{value:"Usage",id:"usage",level:2},{value:"Top bar",id:"top-bar",level:3},{value:"Bottom bar",id:"bottom-bar",level:3},{value:"Props",id:"props",level:2},{value:"Theme colors",id:"theme-colors",level:2}],b={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A component to display action items in a bar. It can be placed at the top or bottom.\nThe top bar usually contains the screen title, controls such as navigation buttons, menu button etc.\nThe bottom bar usually provides access to a drawer and up to four actions."),(0,a.kt)("p",null,"By default Appbar uses primary color as a background, in dark theme with ",(0,a.kt)("inlineCode",{parentName:"p"},"adaptive")," mode it will use surface colour instead.\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme"},"Dark Theme")," for more informations"),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("img",{class:"small",src:"/react-native-paper/screenshots/appbar.png"})),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"top-bar"},"Top bar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import * as React from \'react\';\nimport { Appbar } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Appbar.Header>\n    <Appbar.BackAction onPress={() => {}} />\n    <Appbar.Content title="Title" />\n    <Appbar.Action icon="calendar" onPress={() => {}} />\n    <Appbar.Action icon="magnify" onPress={() => {}} />\n  </Appbar.Header>\n);\n\nexport default MyComponent;\n')),(0,a.kt)("h3",{id:"bottom-bar"},"Bottom bar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { StyleSheet } from 'react-native';\nimport { Appbar, FAB, useTheme } from 'react-native-paper';\nimport { useSafeAreaInsets } from 'react-native-safe-area-context';\n\nconst BOTTOM_APPBAR_HEIGHT = 80;\nconst MEDIUM_FAB_HEIGHT = 56;\n\nconst MyComponent = () => {\n  const { bottom } = useSafeAreaInsets();\n  const theme = useTheme();\n\n  return (\n    <Appbar\n      style={[\n        styles.bottom,\n        {\n          height: BOTTOM_APPBAR_HEIGHT + bottom,\n          backgroundColor: theme.colors.elevation.level2,\n        },\n      ]}\n      safeAreaInsets={{ bottom }}\n    >\n      <Appbar.Action icon=\"archive\" onPress={() => {}} />\n      <Appbar.Action icon=\"email\" onPress={() => {}} />\n      <Appbar.Action icon=\"label\" onPress={() => {}} />\n      <Appbar.Action icon=\"delete\" onPress={() => {}} />\n      <FAB\n        mode=\"flat\"\n        size=\"medium\"\n        icon=\"plus\"\n        onPress={() => {}}\n        style={[\n          styles.fab,\n          { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },\n        ]}\n      />\n    </Appbar>\n  );\n};\n\nconst styles = StyleSheet.create({\n  bottom: {\n    backgroundColor: 'aquamarine',\n    position: 'absolute',\n    left: 0,\n    right: 0,\n    bottom: 0,\n  },\n  fab: {\n    position: 'absolute',\n    right: 16,\n  },\n});\n\nexport default MyComponent;\n")),(0,a.kt)("span",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(r.Z,{link:"Appbar/Appbar",mdxType:"PropTable"}),(0,a.kt)("h2",{id:"theme-colors"},"Theme colors"),(0,a.kt)(p.Z,{data:{default:{backgroundColor:"theme.colors.surface"},elevated:{backgroundColor:"theme.colors.elevation.level2"}},componentName:"Appbar",mdxType:"ThemeColorsTable"}))}d.isMDXComponent=!0}}]);