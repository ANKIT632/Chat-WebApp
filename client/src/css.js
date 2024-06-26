const style = {

  appDiv: "bg-gray-200 min-h-screen flex flex-col items-center justify-center",

  mainContainer: "h-[96vh] w-[96vw]   flex rounded-lg  shadow-lg bg-blue-50 max-sm:h-[100vh] max-sm:w-[100vw]",

  //sideBar style
  SideBarContainer: "sm:flex-[0.25] rounded-l-lg max-sm:m-1 flex flex-col  ",
  SideBarHeader: " flex  bg-white shadow-sm rounded-lg p-1 justify-between sm:m-1.5 max-sm:flex-col  max-sm:h-full",
  SideBarSearch: " flex bg-white m-1.5 p-1 rounded-full shadow max-sm:hidden",
  sideBarFriendList: "flex-1 flex-col   bg-white m-1.5 p-1 rounded-lg shadow max-sm:hidden",

  unclickIcon: "text-2xl text-gray-500 rounded-full shadow -200  m-0.5 p-0.5  md:text-3xl",

  FriendListContainer: "flex gap-2   mx-1 my-2 p-1 rounded-lg cursor-pointer hover:bg-slate-100 active:bg-slate-200 ",


  // chat Area style
  ChatAreaContainer: "p-1.5  flex sm:flex-[0.75]  flex-col rounded-r-lg  w-full md:gap-2 max-sm:flex-1",
  ChatAreaHeader: "p-1.5 md:rounded-xl bg-white flex md:shadow ",
  ChatAreaMessageContainer: "flex-1 bg-blue-100 shadow md:rounded-lg overflow-y-scroll max-sm:rounded-b-lg ",
  ChatAreaInputText: " rounded-lg shadow flex bg-white max-sm:mt-1",
  MessageSelfContainer: "flex  m-2  justify-end",
  MessageOtherContainer: "flex m-2 ",
  messageDiv: ' p-1 rounded-b-lg   w-[200px] break-all  md:w-[300px]',
  MessageTimeStemp: "text-[10px] font-semibold text-gray-200 text-right",


  // common csss
  ProfileIcon: "flex justify-start items-center  bg-gray-200  rounded-[100%] w-10 h-10 ",
  icon: "text-2xl text-gray-500 rounded-full shadow hover:bg-gray-200 cursor-pointer m-0.5 p-0.5 active:bg-gray-300 md:text-3xl",

  // welcome page
  WelcomePageContainer: " flex flex-col justify-center items-center flex-[0.75] gap-4 border-b border-b-8 border-blue-300  rounded-xl   p-4  w-[80%] md:w-[40%] ",

  // create group style 
  CreateGroupContainer: "flex sm:flex-[0.75]   justify-center items-center mr-2 max-sm:flex-1",
  CreateGroupInnerContainer: 'flex bg-white justify-between w-full items-center md:w-[60%] rounded-lg shadow-sm',

  // login style

  LoginContainer: "h-[96vh] w-[96vw]  flex rounded-xl  shadow-lg bg-white ",

  //
  UsersGroupSearch: " flex bg-white  p-1 rounded-xl shadow md:w-[70%]"

}


export { style };