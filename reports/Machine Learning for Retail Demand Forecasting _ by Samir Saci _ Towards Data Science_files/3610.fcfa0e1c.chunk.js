(self.webpackChunklite=self.webpackChunklite||[]).push([[3610],{55459:(e,n,i)=>{"use strict";i.d(n,{Z:()=>o});var t=i(67294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var d=t.createElement("path",{d:"M21.27 20.06a9.04 9.04 0 0 0 2.75-6.68C24.02 8.21 19.67 4 14.1 4S4 8.21 4 13.38c0 5.18 4.53 9.39 10.1 9.39 1 0 2-.14 2.95-.41.28.25.6.49.92.7a7.46 7.46 0 0 0 4.19 1.3c.27 0 .5-.13.6-.35a.63.63 0 0 0-.05-.65 8.08 8.08 0 0 1-1.29-2.58 5.42 5.42 0 0 1-.15-.75zm-3.85 1.32l-.08-.28-.4.12a9.72 9.72 0 0 1-2.84.43c-4.96 0-9-3.71-9-8.27 0-4.55 4.04-8.26 9-8.26 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32a5.59 5.59 0 0 0 .21 1.29c.19.7.49 1.4.89 2.08a6.43 6.43 0 0 1-2.67-1.06c-.34-.22-.88-.48-1.16-.74z"});const o=function(e){return t.createElement("svg",a({width:29,height:29},e),d)}},46913:(e,n,i)=>{"use strict";i.d(n,{Y:()=>r,r:()=>l});var t=i(319),a=i.n(t),d=i(98007),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"RegWall_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"lockedSource"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}}]}}].concat(a()(d.qU.definitions))},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Wall_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[{kind:"Argument",name:{kind:"Name",value:"postMeteringOptions"},value:{kind:"Variable",name:{kind:"Name",value:"postMeteringOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isLockedPreviewOnly"}}]}},{kind:"Field",name:{kind:"Name",value:"isLocked"}},{kind:"Field",name:{kind:"Name",value:"isMarkedPaywallOnly"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PayWall_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"RegWall_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PayWallWrapper_post"}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PayWall_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}}]}}]}}]),a()(o.definitions),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PayWallWrapper_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}}]}},{kind:"Field",name:{kind:"Name",value:"primaryTopic"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"topics"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}}]}}]}}]))},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Wall_meteringInfo"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeteringInfo"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"RegWall_meteringInfo"}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"RegWall_meteringInfo"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MeteringInfo"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"unlocksRemaining"}},{kind:"Field",name:{kind:"Name",value:"postIds"}}]}}]))}},62549:(e,n,i)=>{"use strict";i.d(n,{t:()=>a});var t=i(319),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DraftStatus_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"pendingCollection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"BoldCollectionName_collection"}}]}},{kind:"Field",name:{kind:"Name",value:"statusForCollection"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"isPublished"}}]}}].concat(i.n(t)()([{kind:"FragmentDefinition",name:{kind:"Name",value:"BoldCollectionName_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]))}},95538:(e,n,i)=>{"use strict";i.d(n,{U:()=>m,m:()=>s});var t=i(319),a=i.n(t),d=i(42423),o=i(79987),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"HighlighSegmentContext_paragraph"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Paragraph"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ParagraphRefsMapContext_paragraph"}}]}}].concat(a()(o.p.definitions))},r=([{kind:"FragmentDefinition",name:{kind:"Name",value:"ActiveSelectionContext_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SelectionMenu_highlight"}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"SelectionMenu_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"userId"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}])),{kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ActiveSelectionContext_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SelectionMenu_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostNewNoteCard_post"}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"SelectionMenu_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isPublished"}},{kind:"Field",name:{kind:"Name",value:"isLocked"}},{kind:"Field",name:{kind:"Name",value:"latestPublishedVersion"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"allowNotes"}}]}}]}}]),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PostNewNoteCard_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"latestPublishedVersion"}}]}}]))}),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"InteractivePostBody_postPreview"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extendedPreviewContent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"truncationConfig"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"previewParagraphsWordCountThreshold"},value:{kind:"IntValue",value:"400"}},{kind:"ObjectField",name:{kind:"Name",value:"minimumWordLengthForTruncation"},value:{kind:"IntValue",value:"150"}},{kind:"ObjectField",name:{kind:"Name",value:"truncateAtEndOfSentence"},value:{kind:"BooleanValue",value:!0}},{kind:"ObjectField",name:{kind:"Name",value:"showFullImageCaptions"},value:{kind:"BooleanValue",value:!0}},{kind:"ObjectField",name:{kind:"Name",value:"shortformPreviewParagraphsWordCountThreshold"},value:{kind:"IntValue",value:"30"}},{kind:"ObjectField",name:{kind:"Name",value:"shortformMinimumWordLengthForTruncation"},value:{kind:"IntValue",value:"30"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bodyModel"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostBody_bodyModel"}}]}},{kind:"Field",name:{kind:"Name",value:"isFullContent"}}]}}]}}].concat(a()(d.Pk.definitions))},m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"InteractivePostBody_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[{kind:"Argument",name:{kind:"Name",value:"postMeteringOptions"},value:{kind:"Variable",name:{kind:"Name",value:"postMeteringOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isLockedPreviewOnly"}},{kind:"Field",name:{kind:"Name",value:"bodyModel"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostBody_bodyModel"}},{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"HighlighSegmentContext_paragraph"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NormalizeHighlights_paragraph"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"allowNotes"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostBody_creator"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ActiveSelectionContext_post"}}]}}].concat(a()(d.Pk.definitions),a()(l.definitions),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"NormalizeHighlights_paragraph"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Paragraph"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"text"}}]}}]),a()(d.v.definitions),a()(r.definitions))}},7834:(e,n,i)=>{"use strict";i.d(n,{b:()=>w});var t=i(67154),a=i.n(t),d=i(63038),o=i.n(d),l=i(28655),r=i.n(l),s=i(92471),m=i(38460),k=i(67294),c=i(38882),u=i(75119),v=i(86249),p=i(10374),N=i(37070),S=i(83363),g=i(59713),f=i.n(g),F=i(39202);function h(){var e=r()(["\n  fragment NormalizeHighlights_paragraph on Paragraph {\n    name\n    text\n  }\n"]);return h=function(){return e},e}function y(){var e=r()(["\n  fragment NormalizeHighlights_highlight on Quote {\n    endOffset\n    startOffset\n    paragraphs {\n      name\n      text\n    }\n  }\n"]);return y=function(){return e},e}function P(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function b(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?P(Object(i),!0).forEach((function(n){f()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function _(e,n,i){if(!e||"number"!=typeof n||"number"!=typeof i)return null;var t=n,a=i;return e.substr(t,a-t)}var C=(0,s.Ps)(y()),O=((0,s.Ps)(h()),i(6443)),D=i(6402);function E(){var e=r()(["\n  query InteractivePostBodyQuery($postId: ID!, $showNotes: Boolean!) {\n    post(id: $postId) {\n      id\n      highlights {\n        id\n        ...ActiveSelectionContext_highlight\n        ...HighlighSegmentContext_highlight\n        ...NormalizeHighlights_highlight\n        ...PostBody_highlight\n      }\n      privateNotes @include(if: $showNotes) {\n        ...PostBody_privateNote\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return E=function(){return e},e}var T=(0,s.Ps)(E(),v.UW,S.g8,N.XV,N.w6,C),w=k.forwardRef((function(e,n){var i,t,d,l=e.isAuroraPostPageEnabled,r=e.post,s=e.inlinePost,g=e.postBodyInserts,f=e.richTextStyle,h=e.markedUpBodyModel,y=e.shouldHideHighlightAnnotations,P=(0,O.H)().value,C=s&&!r?h||(null==s||null===(i=s.extendedPreviewContent)||void 0===i?void 0:i.bodyModel):null==r||null===(t=r.content)||void 0===t?void 0:t.bodyModel,E={creator:null==r?void 0:r.creator,isAuroraPostPageEnabled:l,postBodyInserts:g,ref:n,richTextStyle:f||"FULL_PAGE",postId:(null==r?void 0:r.id)||""},w=r&&r.creator&&r.creator.allowNotes||!1,x=(0,m.t)(T,{ssr:!1,variables:{postId:(null==r?void 0:r.id)||"",showNotes:w},notifyOnNetworkStatusChange:!0}),I=o()(x,2),B=I[0],M=I[1],j=M.called,L=M.data,H=null==L?void 0:L.post;if(k.useEffect((function(){r&&!j&&B()}),[r]),!C)return D.k.error("Expected post to have content or preview content."),null;var R=(null==r||null===(d=r.content)||void 0===d?void 0:d.bodyModel)&&(null==r?void 0:r.content.bodyModel.paragraphs)||[],W=function(e,n){return e&&n?e.map((function(e){var i=e.endOffset,t=e.startOffset,a=e.paragraphs&&e.paragraphs[0],d=function(e,n){return e?n.find((function(n){var i=n.name;return e===i})):null}(a.name,n);if(!a||!d)return null;var o=_(a.text,t,i),l=_(d.text,t,i);if(!o||!l)return null;if(o===l)return e;var r=d.text?d.text.indexOf(o):null;if("number"!=typeof r||r<0)return null;var s=r+o.length;return b(b({},e),{},{endOffset:s,startOffset:r})})).filter(F.b):e}(H&&H.highlights||[],R),A=H&&H.privateNotes||null;return k.createElement(p.yb,null,k.createElement(u.KN,null,k.createElement(v.Ms,{interactivePost:r,highlights:W,disableSelection:!r},k.createElement(S.U7,{highlights:W,paragraphs:R,viewer:P},k.createElement(c.c.Provider,{value:!0},k.createElement(N.yO,a()({},E,{bodyModel:C,highlights:W,privateNotes:A,shouldHideHighlightAnnotations:y})))))))}))},42423:(e,n,i)=>{"use strict";i.d(n,{Pk:()=>m,v:()=>k});var t=i(319),a=i.n(t),d=i(40578),o=i(54975),l=i(27048),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostNotesDetails_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}].concat(a()(l.W.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostNotesMarkers_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"endOffset"}},{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"startOffset"}},{kind:"Field",name:{kind:"Name",value:"userId"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostNotesDetails_user"}}]}}]}}].concat(a()(r.definitions))},m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBody_bodyModel"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RichText"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sections"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"startIndex"}},{kind:"Field",name:{kind:"Name",value:"textLayout"}},{kind:"Field",name:{kind:"Name",value:"imageLayout"}},{kind:"Field",name:{kind:"Name",value:"backgroundImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"originalHeight"}},{kind:"Field",name:{kind:"Name",value:"originalWidth"}}]}},{kind:"Field",name:{kind:"Name",value:"videoLayout"}},{kind:"Field",name:{kind:"Name",value:"backgroundVideo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"videoId"}},{kind:"Field",name:{kind:"Name",value:"originalHeight"}},{kind:"Field",name:{kind:"Name",value:"originalWidth"}},{kind:"Field",name:{kind:"Name",value:"previewImageId"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostBodySection_paragraph"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"normalizedBodyModel_richText"}}]}}].concat(a()(d.Fm.definitions),a()(o.gd.definitions))},k=([{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBody_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"normalizedBodyModel_highlight"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostBodySection_highlight"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostNotesMarkers_highlight"}}]}}].concat(a()(o.Cn.definitions),a()(d.rz.definitions),a()(s.definitions)),{kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBody_creator"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostNotesMarkers_creator"}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PostNotesMarkers_creator"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]))});[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostBody_privateNote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Note"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"normalizedBodyModel_privateNote"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostBodySection_privateNote"}}]}}].concat(a()(o.EH.definitions),a()(d.ik.definitions))},95204:(e,n,i)=>{"use strict";i.d(n,{R:()=>k});var t=i(319),a=i.n(t),d=i(93403),o=i(10654),l=i(15855),r=i(57572),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostFooterSocialPopover_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SharePostButton_post"}}]}}].concat(a()(r.o.definitions))},m=i(51277),k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostFooterActionsBar_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"isPublished"}},{kind:"Field",name:{kind:"Name",value:"allowResponses"}},{kind:"Field",name:{kind:"Name",value:"postResponses"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"}}]}},{kind:"Field",name:{kind:"Name",value:"isLimitedState"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"BookmarkButton_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"MultiVote_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SharePostButtons_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostFooterSocialPopover_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"OverflowMenuButtonWithNegativeSignal_post"}}]}}].concat(a()(d.z.definitions),a()(o.x.definitions),a()(l.E.definitions),a()(s.definitions),a()(m.v.definitions))}},67927:(e,n,i)=>{"use strict";i.d(n,{F:()=>_});var t=i(28655),a=i.n(t),d=i(67154),o=i.n(d),l=i(92471),r=i(67294),s=i(91743),m=i(51277),k=i(50455),c=i(1444),u=i(74543),v=i(20210),p=i(10654),N=i(17878),S=i(3428),g=i(21232),f=i(6443),F=i(75399),h=i(77355),y=i(30020),P=i(66411);function b(){var e=a()(["\n  fragment PostFooterActionsBar_post on Post {\n    id\n    visibility\n    isPublished\n    allowResponses\n    postResponses {\n      count\n    }\n    isLimitedState\n    creator {\n      id\n    }\n    collection {\n      id\n    }\n    ...BookmarkButton_post\n    ...MultiVote_post\n    ...SharePostButtons_post\n    ...PostFooterSocialPopover_post\n    ...OverflowMenuButtonWithNegativeSignal_post\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return b=function(){return e},e}var _=function(e){var n,i=e.post,t=e.useSocialPopover,a=e.shouldHideClapsText,d=void 0!==a&&a,l=r.useContext(g.f).openSidebar,m=!!(0,f.H)().value,k=i.isPublished,p=i.creator,b="clap_footer",_={post:i,source:"post_actions_footer"},C=(null==i||null===(n=i.postResponses)||void 0===n?void 0:n.count)||null;return r.createElement(r.Fragment,null,r.createElement(h.x,{display:"flex",justifyContent:"space-between",print:{display:"none"}},r.createElement(P.cW,{source:{name:"post_actions_footer"}},r.createElement(h.x,{display:"flex",flexDirection:"row",alignItems:"center"},r.createElement(h.x,{maxWidth:"155px"},r.createElement(N.e,null,r.createElement(v.S,{post:i,buttonStyle:"SUBTLE_MARGIN",hasDialog:!0,shouldShowResponsiveLabelText:!0,shouldHideClapsText:d,susiEntry:b,buttonColor:"LIGHTER",countScale:"S"})),r.createElement(N.s,null,r.createElement(v.S,{post:i,buttonStyle:"SUBTLE_MARGIN",hasDialog:!0,shouldHideClapsText:d,susiEntry:b,buttonColor:"LIGHTER",countScale:"S"}))),r.createElement(P.cW,{source:{name:"follow_footer",susiEntry:"follow_footer"}},r.createElement(h.x,{display:"flex",marginLeft:"24px"},r.createElement(S.h,{svgSize:"S",trackingData:{postId:i.id},responsesCount:C,allowResponses:i.allowResponses,isLimitedState:i.isLimitedState,handleClick:l,iconStylesOverride:{marginTop:"0px"},countStylesOverride:{marginLeft:"4px",marginTop:"0px"}}))))),r.createElement(h.x,{display:"flex",alignItems:"center"},k&&r.createElement(r.Fragment,null,t?r.createElement(u.$,o()({},_,{shareIconStyle:"ICON_SUBTLE"})):r.createElement(F.U,_),r.createElement(h.x,{flexGrow:"0",margin:t?"0 20px":"0 4px 0 5px"},r.createElement(P.cW,{source:{name:"post_actions_footer"}},r.createElement(c.o,{post:i,susiEntry:"bookmark_footer",buttonStyle:"ICON_SUBTLE"})))),i&&p&&m&&r.createElement(y._,{tooltipText:"More",targetDistance:10},r.createElement(s.t,{post:i,iconStyle:"ICON_SUBTLE"})))))};(0,l.Ps)(b(),k.z,p.x,F.E,u.u,m.v)},3428:(e,n,i)=>{"use strict";i.d(n,{h:()=>f});var t=i(59713),a=i.n(t),d=i(67294),o=i(30020),l=i(87691),r=i(18627),s=i(66411),m=i(14646);function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var c=d.createElement("path",{d:"M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"});const u=function(e){return d.createElement("svg",k({width:24,height:24,viewBox:"0 0 24 24"},e),c)};var v=i(55459);function p(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function N(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?p(Object(i),!0).forEach((function(n){a()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var S=function(e,n){return"LIGHTER"===n?e.baseColor.fill.darker:e.baseColor.fill.lighter},g=function(e,n){return function(i){return{cursor:n?"not-allowed":"pointer",border:0,padding:"4px 0",display:"flex",alignItems:"center",fill:"LIGHTER"===e?i.baseColor.fill.lighter:i.baseColor.fill.light,":hover":n?void 0:{fill:S(i,e),"& p":{color:S(i,e)}}}}},f=function(e){var n=e.allowResponses,i=e.responsesCount,t=e.handleClick,a=e.trackingData,k=e.isLimitedState,c=e.iconStylesOverride,p=e.countStylesOverride,S=e.svgSize,f=void 0===S?"L":S,F=e.responsesCountColor,h=void 0===F?"LIGHTER":F,y=e.disabledTooltipText,P=void 0===y?"":y,b=e.responsesCountScale,_=void 0===b?"M":b,C=(0,m.I)(),O=(0,r.Av)(),D=(0,s.pK)();if(!n)return null;var E={opacity:k?.4:1},T="S"===f?d.createElement(u,{"aria-label":"responses",className:C([c])}):d.createElement(v.Z,{"aria-label":"responses",className:C([c])});return d.createElement(o._,{tooltipText:k?P:"Respond",targetDistance:15},d.createElement("button",{onClick:k?void 0:function(e){null==t||t(e),O.event("responses.viewAllClicked",N(N({},a),{},{source:D}))},className:C(g(h,k)),"aria-label":"responses"},T,!!i&&d.createElement(l.F,{scale:_,color:h},d.createElement("span",{className:"pw-responses-count ".concat(C([p,E]))},i))))}},21232:(e,n,i)=>{"use strict";i.d(n,{f:()=>t});var t=i(67294).createContext({addContinueThisThreadSidebar:function(){return null},openSidebar:function(){return null},closeSidebar:function(){return null}})},57572:(e,n,i)=>{"use strict";i.d(n,{o:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SharePostButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}},15855:(e,n,i)=>{"use strict";i.d(n,{E:()=>o});var t=i(319),a=i.n(t),d=i(57572),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SharePostButtons_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isLimitedState"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SharePostButton_post"}}]}}].concat(a()(d.o.definitions))}},69724:(e,n,i)=>{"use strict";i.d(n,{k:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostScrollTracker_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"sequence"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sequenceId"}}]}}]}}]}},68821:(e,n,i)=>{"use strict";i.d(n,{V:()=>p,k:()=>N});var t=i(28655),a=i.n(t),d=i(23493),o=i.n(d),l=i(92471),r=i(67294),s=i(18627),m=i(66411),k=i(34135),c=i(77280),u=i(84509);function v(){var e=a()(["\n  fragment PostScrollTracker_post on Post {\n    id\n    collection {\n      id\n    }\n    sequence {\n      sequenceId\n    }\n  }\n"]);return v=function(){return e},e}function p(e,n,i,t){var a=(0,s.Av)(),d=(0,m.pK)(),l=(0,c.he)(),v=(0,m.Qi)(),p=Date.now(),N=null,S=r.useCallback(o()((function(){if(e.current){var t=(0,u.L6)(e.current);if((0,u.pn)(t)){var o=Date.now(),r=(0,u.tM)(t),s=(0,u.UO)(),m=(0,u.t_)(),k=Math.round(r.top),c=Math.round(r.top+r.height),S=s.top,g=s.top+m.height,f=s.height,F={postIds:[n.id],collectionIds:[n.collection?n.collection.id:""],sequenceIds:[n.sequence?n.sequence.sequenceId:""],sources:i?["post_page"]:[v],tops:[k],bottoms:[c],areFullPosts:[!0],loggedAt:o,timeDiff:null!==N?Math.round(o-N):0,scrollTop:S,scrollBottom:g,scrollableHeight:f,viewStartedAt:p},h={referrer:l,referrerSource:d};i?a.event("post.streamScrolled",F,h):a.event("post.streamScrolled",F),N=o}}}),1e3),[n,i]);r.useEffect((function(){S();var e=null!=t&&t.current?(0,k.jC)(null==t?void 0:t.current):k.V6;return e.on("scroll_end",S),function(){e.off("scroll_end",S)}}),[S])}var N=(0,l.Ps)(v())}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/3610.fcfa0e1c.chunk.js.map