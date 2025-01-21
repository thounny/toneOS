const ASCII_ART = `
  H   H  EEEEE  L        L         OOO      W   W  OOO     RRRR    L        DDDD  
  H   H  E      L        L        O   O     W   W  O   O    R   R   L        D   D 
  HHHHH  EEEE   L        L        O   O     W W W  O   O    RRRR    L        D   D 
  H   H  E      L        L        O   O     WW WW  O   O    R  R    L        D   D 
  H   H  EEEEE  LLLLL    LLLLL     OOO      W   W  OOO     R   R   LLLLL    DDDD
  
  maximize window to see ASCII art
`;

class NotepadProgram extends Program {
  createWindow(argument) {
    let title = argument === null ? "Notepad" : `Notepad (${argument})`;

    let winfo = {
      name: "Notepad",
      title,
      icon: "img/desktop/Notepad.png",
      resizable: true,
      margin: false,
      app: true,
    };

    // Check if the argument is 'PGP_Key.txt' and replace content with ASCII art
    let doc = "";
    if (argument === "ASCII.txt") {
      doc = ASCII_ART;
      winfo.width = 450;
      winfo.height = 300;
    }

    let body = `
            <div class="menu-bar__container">
                <div class="menu-bar__menu">
                    <div class="menu-bar__handle"></div>
                    <span class="menu-bar__item">File</span>
                    <span class="menu-bar__item">Edit</span>
                    <span class="menu-bar__item">Search</span>
                    <span class="menu-bar__item">Help</span>
                </div>
            </div>
            <textarea class="notepad__textarea">${doc}</textarea>
        `;

    return [winfo, body];
  }
}

window.pm.registerPrototype("notepad", NotepadProgram);
