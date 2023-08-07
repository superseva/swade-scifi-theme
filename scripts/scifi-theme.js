const SHEET_NAME = 'SCI FI Sheet by HappySteve';
const ID = 'swade-scifi-theme';

Hooks.on('init', () => {
    class SwadeSciFiSheet extends game.swade.sheets.CharacterSheet {
      static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
          classes: ['swade-scifi-theme-sheet', 'swade-official', 'sheet', 'actor'],
          width: 705,
          height: 800,
          resizable: true,
        });
      }
    }
  
    Actors.registerSheet('swade', SwadeSciFiSheet, {
      types: ['character', 'npc'],
      makeDefault: false,
      label: SHEET_NAME,
    });
  });