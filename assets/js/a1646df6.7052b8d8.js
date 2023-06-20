"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9207],{22706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var o=n(87462),s=(n(67294),n(3905)),r=n(50214),a=n(58764);const c={title:"SegmentedButtons"},l=void 0,m={unversionedId:"components/SegmentedButtons/SegmentedButtons",id:"components/SegmentedButtons/SegmentedButtons",title:"SegmentedButtons",description:"Segmented buttons can be used to select options, switch views or sort elements.",source:"@site/docs/components/SegmentedButtons/SegmentedButtons.mdx",sourceDirName:"components/SegmentedButtons",slug:"/components/SegmentedButtons/",permalink:"/react-native-paper/docs/components/SegmentedButtons/",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/SegmentedButtons/SegmentedButtons.tsx",tags:[],version:"current",frontMatter:{title:"SegmentedButtons"},sidebar:"components",previous:{title:"Searchbar",permalink:"/react-native-paper/docs/components/Searchbar"},next:{title:"Snackbar",permalink:"/react-native-paper/docs/components/Snackbar"}},i={},d=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Theme colors",id:"theme-colors",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Segmented buttons can be used to select options, switch views or sort elements."),(0,s.kt)("div",{class:"screenshots"},(0,s.kt)("img",{class:"medium",src:"/react-native-paper/screenshots/segmented-button.png"})),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { SafeAreaView, StyleSheet } from 'react-native';\nimport { SegmentedButtons } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [value, setValue] = React.useState('');\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <SegmentedButtons\n        value={value}\n        onValueChange={setValue}\n        buttons={[\n          {\n            value: 'walk',\n            label: 'Walking',\n          },\n          {\n            value: 'train',\n            label: 'Transit',\n          },\n          { value: 'drive', label: 'Driving' },\n        ]}\n      />\n    </SafeAreaView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n\nexport default MyComponent;\n")),(0,s.kt)("span",null),(0,s.kt)("h2",{id:"props"},"Props"),(0,s.kt)(r.Z,{link:"SegmentedButtons/SegmentedButtons",mdxType:"PropTable"}),(0,s.kt)("h2",{id:"theme-colors"},"Theme colors"),(0,s.kt)(a.Z,{data:{checked:{backgroundColor:"theme.colors.secondaryContainer",textColor:"theme.colors.onSecondaryContainer",borderColor:"theme.colors.primary"},unchecked:{backgroundColor:"theme.colors.primary + 12% transparency",textColor:"theme.colors.onSurface",borderColor:"theme.colors.outline"},disabled:{borderColor:"theme.colors.surfaceDisabled",textColor:"theme.colors.onSurfaceDisabled"}},componentName:"SegmentedButtons",mdxType:"ThemeColorsTable"}))}p.isMDXComponent=!0}}]);