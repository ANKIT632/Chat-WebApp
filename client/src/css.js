const style={

    appDiv:"bg-gray-200 min-h-screen flex flex-col items-center justify-center",

    mainContainer:"h-[96vh] w-[96vw]   flex rounded-lg  shadow-lg bg-blue-50 ",

    //sideBar style
    SideBarContainer:"flex-[0.25] rounded-l-lg   flex flex-col",
    SideBarHeader:" flex  bg-white shadow-sm rounded-lg p-1 justify-between m-1.5",
    SideBarSearch:" flex bg-white m-1.5 p-1 rounded-xl shadow",
    sideBarFriendList:"flex-1 flex-col  bg-white m-1.5 p-1 rounded-lg shadow",
  
    unclickIcon:"text-2xl text-gray-500 rounded-full shadow -200  m-0.5 p-0.5  md:text-3xl",

    FriendListContainer:"flex gap-2   mx-1 my-2 p-1 rounded-lg cursor-pointer hover:bg-slate-50 active:bg-slate-100 ",


  // chat Area style
    ChatAreaContainer:"p-1.5  flex flex-[0.75]  flex-col rounded-r-lg  w-full md:gap-2 ",
    ChatAreaHeader:"p-1.5 md:rounded-xl bg-white flex md:shadow",
    ChatAreaMessageContainer:"flex-1 bg-red-100 md:shadow md:rounded-lg overflow-y-scroll ",
    ChatAreaInputText:" md:rounded-2xl shadow flex bg-white",
    MessageSelfContainer:"flex  m-2  justify-end",
    MessageOtherContainer:"flex m-2 ",
    messageDiv:' p-1 rounded-b-lg   w-[200px] break-all  md:w-[300px]',
    MessageTimeStemp:"text-[10px] font-semibold text-gray-200 text-right",


    // common csss
    ProfileIcon:"flex justify-start items-center  bg-gray-200  rounded-[100%] w-10 h-10 ",
    icon:"text-2xl text-gray-500 rounded-full shadow hover:bg-gray-200 cursor-pointer m-0.5 p-0.5 active:bg-gray-300 md:text-3xl",

  // welcome page
  WelcomePageContainer:" flex flex-col justify-center items-center flex-[0.75] gap-4 border-b border-b-8 border-blue-300  rounded-xl   p-4  w-[80%] md:w-[40%] ",
    
 // create group style 
 CreateGroupContainer:"flex flex-[0.75]   justify-center items-center mr-2",
CreateGroupInnerContainer:'flex bg-white justify-between w-full items-center md:w-[60%] rounded-lg shadow-sm',

// login style

 LoginContainer:"h-[96vh] w-[96vw]  flex rounded-xl  shadow-lg bg-white ",

 //
UsersGroupSearch :" flex bg-white  p-1 rounded-xl shadow md:w-[70%]"

}


export {style}