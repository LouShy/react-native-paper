"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2380],{45919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(87462),o=(n(67294),n(3905)),s=n(50214),a=n(58764);const l={title:"HelperText"},p=void 0,i={unversionedId:"components/HelperText/HelperText",id:"components/HelperText/HelperText",title:"HelperText",description:"Helper text is used in conjuction with input elements to provide additional hints for the user.",source:"@site/docs/components/HelperText/HelperText.mdx",sourceDirName:"components/HelperText",slug:"/components/HelperText/",permalink:"/react-native-paper/docs/components/HelperText/",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/HelperText/HelperText.tsx",tags:[],version:"current",frontMatter:{title:"HelperText"},sidebar:"components",previous:{title:"FAB.Group",permalink:"/react-native-paper/docs/components/FAB/FABGroup"},next:{title:"IconButton",permalink:"/react-native-paper/docs/components/IconButton/"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Theme colors",id:"theme-colors",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Helper text is used in conjuction with input elements to provide additional hints for the user."),(0,o.kt)("div",{class:"screenshots"},(0,o.kt)("img",{class:"small",src:"/react-native-paper/screenshots/helper-text.gif"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View } from 'react-native';\nimport { HelperText, TextInput } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [text, setText] = React.useState('');\n\n   const onChangeText = text => setText(text);\n\n  const hasErrors = () => {\n    return !text.includes('@');\n  };\n\n return (\n    <View>\n      <TextInput label=\"Email\" value={text} onChangeText={onChangeText} />\n      <HelperText type=\"error\" visible={hasErrors()}>\n        Email address is invalid!\n      </HelperText>\n    </View>\n  );\n};\n\nexport default MyComponent;\n")),(0,o.kt)("span",null),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)(s.Z,{link:"HelperText/HelperText",mdxType:"PropTable"}),(0,o.kt)("h2",{id:"theme-colors"},"Theme colors"),(0,o.kt)(a.Z,{data:{disabled:{textColor:"theme.colors.onSurfaceDisabled"},defualt:{textColor:"theme.colors.onSurfaceVariant"},error:{textColor:"theme.colors.error"}},componentName:"HelperText",mdxType:"ThemeColorsTable"}))}u.isMDXComponent=!0}}]);