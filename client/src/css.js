const style={

    appDiv:"bg-gray-200 min-h-screen flex flex-col items-center justify-center",

    mainContainer:"h-[96vh] w-[96vw]  bg-white flex rounded-lg  shadow-lg bg-blue-50 ",

    //sideBar style
    SideBarContainer:"flex-[0.25] rounded-l-lg  bg-blue-50 flex flex-col",
    SideBarHeader:" flex  bg-white shadow-sm rounded-lg p-1 justify-between m-1.5",
    SideBarSearch:" flex bg-white m-1.5 p-1 rounded-xl shadow",
    sideBarFriendList:"flex-1 flex-col  bg-white m-1.5 p-1 rounded-lg shadow",
    icon:"text-2xl text-gray-500 rounded-full shadow hover:bg-gray-200 cursor-pointer m-0.5 p-0.5 active:bg-gray-300 md:text-3xl",
    unclickIcon:"text-2xl text-gray-500 rounded-full shadow -200  m-0.5 p-0.5  md:text-3xl",

    FriendListContainer:"flex gap-2   mx-1 my-2 p-1 rounded-lg cursor-pointer hover:bg-slate-50 active:bg-slate-100 ",


  // chat Area style
    ChatAreaContainer:"m-1  flex flex-[0.75]  flex-col rounded-r-lg  w-full md:gap-2 ",
    ChatAreaHeader:"p-1.5 md:rounded-xl bg-white flex md:shadow",
    ChatAreaMessageContainer:"flex-1 bg-slate-50 md:shadow-sm md:rounded-lg",
    ChatAreaInputText:"bg-green-100 "

}


export {style}