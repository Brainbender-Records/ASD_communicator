// ─────────────────────────────────────────────
//  Audio Communication Board
//  11 screens × 16 pads = 176 slots
//
//  Screen 1  → Options   1– 16  → sound1.mp3   … sound16.mp3
//  Screen 2  → Options  17– 32  → sound17.mp3  … sound32.mp3
//  Screen 3  → Options  33– 48  → sound33.mp3  … sound48.mp3
//  Screen 4  → Options  49– 64  → sound49.mp3  … sound64.mp3
//  Screen 5  → Options  65– 80  → sound65.mp3  … sound80.mp3
//  Screen 6  → Options  81– 96  → sound81.mp3  … sound96.mp3
//  Screen 7  → Options  97–112  → sound97.mp3  … sound112.mp3
//  Screen 8  → Options 113–128  → sound113.mp3 … sound128.mp3
//  Screen 9  → Options 129–144  → sound129.mp3 … sound144.mp3  (ADL)
//  Screen 10 → Options 145–160  → sound145.mp3 … sound160.mp3  (Regulation)
//  Screen 11 → Options 161–176  → sound161.mp3 … sound176.mp3  (Questions)
// ─────────────────────────────────────────────

const PADS_PER_SCREEN = 16;

const SCREEN_START = {
   1:   1,
   2:  17,
   3:  33,
   4:  49,
   5:  65,
   6:  81,
   7:  97,
   8: 113,
   9: 129,
  10: 145,
  11: 161,
};

const SCREEN_NAMES = {
  1: 'Outside',
  2: 'Doing',
  3: 'Needs',
  4: 'Talking',
  5: 'Visitors',
  6: 'Car',
  7: 'Store',
  8: 'Feelings',
  9: 'ADL',
  10: 'Regulation',
  11: 'Questions',
};

const OPTION_LABELS = {
   1: "Can I go outside.",
   2: "Can I go out back.",
   3: "Can I go up front.",
   4: "Can I play on the rock wall.",
   5: "Can we get the mail.",
   6: "Can we go for a ride.",
   7: "Can we play ball.",
   8: "Can I lay on the grass.",
   9: "Can we go for a walk.",
  10: "I want to go in.",
  11: "I'm tired.",
  12: "I'm done playing.",
  13: "Can we play for longer.",
  14: "Its beautiful outside.",
  15: "I don't like the heat.",
  16: "Can we go on the swing.",
  17: "I want a toy.",
  18: "I want teddy bear.",
  19: "I want to watch TV.",
  20: "I want to play kindle.",
  21: "I want to play a game.",
  22: "I want to read a book.",
  23: "I want you to read to me.",
  24: "Can I watch YouTube.",
  25: "Can I watch Roku Kids.",
  26: "I don't want to watch this.",
  27: "I don't like this show.",
  28: "I like this show.",
  29: "Where is the remote?",
  30: "Play with me.",
  31: "I need to do my chore.",
  32: "Can you sit with me.",
  33: "I need water.",
  34: "I need food.",
  35: "I need a diaper.",
  36: "I need clothes.",
  37: "I need to breathe.",
  38: "I need to do my exercises.",
  39: "I need to rest.",
  40: "I need to go to sleep.",
  41: "I need my boots.",
  42: "I need my shoes.",
  43: "I need help.",
  44: "I want a hair cut.",
  45: "I need to brush my hair.",
  46: "I need a shower.",
  47: "I need a bath.",
  48: "I need to brush my teeth.",
  49: "Hi",
  50: "Hello",
  51: "How are you?",
  52: "It's nice to meet you.",
  53: "My name is Ryland.",
  54: "Whats your name?",
  55: "Where are you from?",
  56: "Do you want to play?",
  57: "On the swings.",
  58: "On the slide.",
  59: "On the monkey bars.",
  60: "On the trapeze.",
  61: "On the rope web.",
  62: "I had fun.",
  63: "I hope to see you again.",
  64: "Goodbye",
  65: "Hi",
  66: "Its nice to meet you.",
  67: "Hello.",
  68: "Whats your name.",
  69: "How old are you?",
  70: "Where are you from?",
  71: "My name is Ryland.",
  72: "My name is RyRy.",
  73: "Do you like video games?",
  74: "Do you have a console?",
  75: "Do you have a video game.",
  76: "I like you",
  77: "I had fun.",
  78: "Nice to meet you.",
  79: "Bye Bye.",
  80: "Goodbye.",
  81: "I need my charger.",
  82: "Can I get my kindle.",
  83: "Can I get my DS.",
  84: "Can I get my DVD",
  85: "Can you turn it down.",
  86: "Can you turn it up.",
  87: "I need my helmet.",
  88: "I'm frustrated.",
  89: "I need to breathe.",
  90: "Can you be quiet",
  91: "It's too loud!",
  92: "Can you hold my hand.",
  93: "I'm hungry.",
  94: "I'm thirsty.",
  95: "I'm bored.",
  96: "Can I talk.",
  97: "I want that.",
  98: "Can I get a toy?",
  99: "Can I get a candy.",
 100: "Can I get a drink.",
 101: "Can we get soda?",
 102: "Can you get snacks?",
 103: "I want to go.",
 104: "I like that.",
 105: "I don't like that.",
 106: "I'm bored.",
 107: "I love you.",
 108: "I'm happy.",
 109: "I'm sad.",
 110: "I'm frustrated.",
 111: "I need a hug.",
 112: "Can you hold my hand.",
 113: "I love you.",
 114: "Can I have a hug.",
 115: "Can I have a kiss.",
 116: "Can you sit with me.",
 117: "I'm happy.",
 118: "I'm sad.",
 119: "I'm mad.",
 120: "I'm scared.",
 121: "I'm sick.",
 122: "I'm tired.",
 123: "I'm annoyed.",
 124: "I'm bored.",
 125: "I'm worried.",
 126: "I'm surprised.",
 127: "I'm confused.",
 128: "I'm calm.",
 // Screen 9 — ADL
 129: "I need help.",
 130: "Yes",
 131: "No",
 132: "Stop!",
 133: "I am hungry.",
 134: "I am thirsty.",
 135: "I want to earn points.",
 136: "I need water.",
 137: "Can I have a snack.",
 138: "I can think a happy thought.",
 139: "I am too hot.",
 140: "I am too cold.",
 141: "I need a diaper.",
 142: "I have a poop.",
 143: "I am tired.",
 144: "I need a new shirt.",
 // Screen 10 — Regulation
 145: "I feel calm.",
 146: "I feel happy.",
 147: "I feel sad.",
 148: "I feel frustrated.",
 149: "I feel peaceful.",
 150: "I feel silly.",
 151: "I feel lonely.",
 152: "I feel pain.",
 153: "I feel thankful.",
 154: "I feel excited.",
 155: "I feel tired.",
 156: "I feel out of control.",
 157: "I feel bored.",
 158: "I feel brave.",
 159: "I feel scared.",
 160: "I feel angry.",
 // Screen 11 — Questions
 161: "Can we play a game?",
 162: "Can I draw?",
 163: "Can I go outside?",
 164: "Can I watch educational Tv?",
 165: "Can I read a book?",
 166: "Can I play with legos?",
 167: "Can I use markers?",
 168: "Can I earn points?",
 169: "Can I play with sensory sand?",
 170: "Can I make a book?",
 171: "Can I play a video game?",
 172: "Can I play with plushies?",
 173: "Can I play my records?",
 174: "Can I do an experiment?",
 175: "Can we pass a ball?",
 176: "Can I play with fidgets?",
};

// Overrides: specific sound files served from CDN
const CDN = 'https://vtelpopqybfytrgzkomj.supabase.co/storage/v1/object/public/game-assets/public/b4a3d873-f963-4f82-a02e-a268023b1fc4/c82b353e-ddb9-4ab7-8ce7-6aaeff769c15/';
const SOUND_OVERRIDES = {
  'sound1.mp3':   CDN+'65d4e153-af02-4ee8-a408-cde71a1e784e.mp3',
  'sound2.mp3':   CDN+'8331d5a7-9d6a-48da-a258-262dac8b5ee6.mp3',
  'sound3.mp3':   CDN+'3de46e3b-30d7-4a18-b6da-1f5aa1f78f7f.mp3',
  'sound4.mp3':   CDN+'caaee08a-b187-4995-9d3a-e78c8d77fe07.mp3',
  'sound5.mp3':   CDN+'087ccc85-2fdd-476f-ac27-bc8f60cb6d28.mp3',
  'sound6.mp3':   CDN+'c43f95c7-612a-4fb1-9728-850fad06c794.mp3',
  'sound7.mp3':   CDN+'4226dcbf-b1b3-4aca-8c4b-ddd25d056e22.mp3',
  'sound8.mp3':   CDN+'719f5ae0-e316-42a6-85f3-4e84ede6b585.mp3',
  'sound9.mp3':   CDN+'a80c86df-80d2-4e55-a0b8-e5869f9573a3.mp3',
  'sound10.mp3':  CDN+'31c106e0-37ea-4f44-a69c-8aa5df828f2d.mp3',
  'sound11.mp3':  CDN+'bcca36b6-62f6-4cb6-881c-d7c4517f2465.mp3',
  'sound12.mp3':  CDN+'d940dd23-cfe9-48a6-9a6b-8c70e882e4b2.mp3',
  'sound13.mp3':  CDN+'9b1f948d-99cd-4e4d-b574-12a51369ec44.mp3',
  'sound14.mp3':  CDN+'2121315a-2e65-4f57-a495-f7ef745db11e.mp3',
  'sound15.mp3':  CDN+'7e6c70d5-baae-45ba-aa37-86e962a0e1d7.mp3',
  'sound16.mp3':  CDN+'4509e013-bd87-4187-897c-b4a7e2916644.mp3',
  'sound17.mp3':  CDN+'aee1ba1d-3305-401a-b012-742267a65800.mp3',
  'sound18.mp3':  CDN+'871cafe4-9ebb-4eba-a164-9f95391dc8d2.mp3',
  'sound19.mp3':  CDN+'37d1b0e1-8384-4c82-a5fd-b37b06928707.mp3',
  'sound20.mp3':  CDN+'961724e1-a55a-4dfe-8f8c-fca82d0e46f6.mp3',
  'sound21.mp3':  CDN+'b77c7485-1b5f-4599-803a-bd450a3a1525.mp3',
  'sound22.mp3':  CDN+'28fd8292-fea2-4253-ac03-abcb8d43cb30.mp3',
  'sound23.mp3':  CDN+'c3644022-d217-4f3e-a2a2-66a973c2c3c3.mp3',
  'sound24.mp3':  CDN+'65ee6c55-4393-47d5-a7e4-99fd7d4b14f9.mp3',
  'sound25.mp3':  CDN+'8e65cc08-0d97-48de-978c-2ab34dea9daa.mp3',
  'sound26.mp3':  CDN+'9c6c9af8-6009-46f0-aa47-ebccb85bd9fd.mp3',
  'sound27.mp3':  CDN+'936b9dd1-e5ca-45bd-b89c-48f1406bd8a8.mp3',
  'sound28.mp3':  CDN+'128b9aaf-4af2-45c5-b98d-c98665d6c34d.mp3',
  'sound29.mp3':  CDN+'3d17186a-0425-41ed-9081-48a8acead3e8.mp3',
  'sound30.mp3':  CDN+'ce4eb1ab-a016-4c21-b15a-d40b6d6c5a6d.mp3',
  'sound31.mp3':  CDN+'185e90a6-5342-46c2-9946-b7aaecd5b526.mp3',
  'sound32.mp3':  CDN+'4aae72b6-5cb6-48f0-b053-126a35279beb.mp3',
  'sound33.mp3':  CDN+'6b7bde40-15ba-4dd3-9ff1-0db845e6f325.mp3',
  'sound34.mp3':  CDN+'56eae8dc-5b9c-4c40-a6d9-85b556329a55.mp3',
  'sound35.mp3':  CDN+'7d91dbb7-d6a1-462b-a85a-a5a8879776bc.mp3',
  'sound36.mp3':  CDN+'0dad004c-b25a-427a-9267-4e5db76e72d0.mp3',
  'sound37.mp3':  CDN+'bff774b4-3615-4c4a-bd44-c8801476081c.mp3',
  'sound38.mp3':  CDN+'9a7ffa2f-103e-4acd-a241-68f49760cdab.mp3',
  'sound39.mp3':  CDN+'9d7716fb-d0a7-42fe-9af3-17b2bafd8d88.mp3',
  'sound40.mp3':  CDN+'04de5b93-b410-4664-8c04-cfccd2340409.mp3',
  'sound41.mp3':  CDN+'c58840ec-4714-458c-80ba-c6dbecb7f2ff.mp3',
  'sound42.mp3':  CDN+'3c8edf90-7af5-4b7d-9e60-ababaf284a9c.mp3',
  'sound43.mp3':  CDN+'f9131375-6829-4f8d-9cd1-7b5e47cc91f4.mp3',
  'sound44.mp3':  CDN+'d3c4dee2-a2f7-40e2-83c8-35e278137402.mp3',
  'sound45.mp3':  CDN+'eddf8915-001f-4619-84dd-c8a68ca36af1.mp3',
  'sound46.mp3':  CDN+'49669dfd-a375-4ba3-a6b6-29fa1deeeafb.mp3',
  'sound47.mp3':  CDN+'206369fe-5230-42d9-bea5-f45c101cfa31.mp3',
  'sound48.mp3':  CDN+'fe0b2d32-4636-4481-b37d-ccc0cf105e1f.mp3',
  'sound49.mp3':  CDN+'dc877bfa-3134-4745-98d5-8c71da64fc2d.mp3',
  'sound50.mp3':  CDN+'79ebc73a-1ece-4569-b388-60d9d6f182c1.mp3',
  'sound51.mp3':  CDN+'3b43d710-1495-47a5-bad9-dbb75ef6dc97.mp3',
  'sound52.mp3':  CDN+'a7bd1958-94bb-4c8c-8dde-a6b16d46167f.mp3',
  'sound53.mp3':  CDN+'f367bc52-5c63-461d-b200-cbceb887ee52.mp3',
  'sound54.mp3':  CDN+'f292ff00-0606-46a3-b9a0-9efa0c559bb9.mp3',
  'sound55.mp3':  CDN+'778a825c-9ddd-4d04-ad19-435be40e07ed.mp3',
  'sound56.mp3':  CDN+'22c35f14-94f6-49a2-900e-0afd3d1c189f.mp3',
  'sound57.mp3':  CDN+'b325aead-3cab-4e15-9b87-dff26b3c5907.mp3',
  'sound58.mp3':  CDN+'49c3ca3c-de41-4629-9af2-7b36b0d5778c.mp3',
  'sound59.mp3':  CDN+'b9417d1e-2e84-484e-80d9-6ea3faee3d2c.mp3',
  'sound60.mp3':  CDN+'f077b447-98d2-471e-825b-39f06b121569.mp3',
  'sound61.mp3':  CDN+'2b2b14d4-17a4-4dd6-b3dd-7e4c9264d01b.mp3',
  'sound62.mp3':  CDN+'8ec4cdeb-e578-4dbe-9b74-840a643e9dd1.mp3',
  'sound63.mp3':  CDN+'53e05a63-b1ce-42d7-b2c7-b52ea0041dcf.mp3',
  'sound64.mp3':  CDN+'7a034b51-d9a7-45b8-9894-7e623bc3f852.mp3',
  'sound65.mp3':  CDN+'15523fe0-5e14-479b-be74-e33d743898d8.mp3',
  'sound66.mp3':  CDN+'8bda5133-9cbe-4510-86a5-66c4477ba6e7.mp3',
  'sound67.mp3':  CDN+'20139fb1-b495-476a-b389-6902003cf700.mp3',
  'sound68.mp3':  CDN+'e5ae38ad-a0a8-421e-a1da-42d355f624d5.mp3',
  'sound69.mp3':  CDN+'001a5bbb-2b6e-4229-aaae-501af25be818.mp3',
  'sound70.mp3':  CDN+'445dbf45-7bc8-424a-9dae-36832d7cbe77.mp3',
  'sound71.mp3':  CDN+'f9266736-62ee-484d-8d08-96670dbcfe8b.mp3',
  'sound72.mp3':  CDN+'e715d545-a82b-455a-8455-6ae6311b0240.mp3',
  'sound73.mp3':  CDN+'1da03e5e-1faf-4097-a822-33b12684819f.mp3',
  'sound74.mp3':  CDN+'5ab28d7c-7491-4dfe-862d-dc2f75924d2b.mp3',
  'sound75.mp3':  CDN+'661c11b9-9693-4dbe-9653-3f691c744066.mp3',
  'sound76.mp3':  CDN+'18330b0e-c6b4-4a86-9bda-039fc96814ca.mp3',
  'sound77.mp3':  CDN+'31272a89-f026-473b-807b-cd0ec5f931e7.mp3',
  'sound78.mp3':  CDN+'5a37fb1c-4dc4-4762-afa4-46120c4f40af.mp3',
  'sound79.mp3':  CDN+'11d16707-2bc5-42d8-b1df-8cbcb3492e2c.mp3',
  'sound80.mp3':  CDN+'ff71043f-52b6-43fb-b9c9-d2aded80e4f2.mp3',
  'sound81.mp3':  CDN+'b175e6a1-954d-4c7a-a665-58706106c2fe.mp3',
  'sound82.mp3':  CDN+'d3b774c8-4442-4bcb-adb8-dfe893e6351d.mp3',
  'sound83.mp3':  CDN+'3921cc4b-48a6-4c44-a6dd-8332e7375320.mp3',
  'sound84.mp3':  CDN+'ebff5cba-5ff3-40b1-abce-c2b9b12542f4.mp3',
  'sound85.mp3':  CDN+'b4cb22f7-9a8f-4edb-8cba-a91213bf49d3.mp3',
  'sound86.mp3':  CDN+'f0d4c50a-f51c-4fd7-bade-7060a14d7707.mp3',
  'sound87.mp3':  CDN+'7ce8617c-d6c0-4af6-9e9d-11730182b9ef.mp3',
  'sound88.mp3':  CDN+'2b22d3ff-7df0-4161-82f3-6c0658ef4530.mp3',
  'sound89.mp3':  CDN+'26c405db-4755-482a-b474-8ccde13573c9.mp3',
  'sound90.mp3':  CDN+'208e1ff1-5e16-4fc8-b0f8-21fdd6646cac.mp3',
  'sound91.mp3':  CDN+'e0ad9a44-0314-44b5-9bdd-643a34b54198.mp3',
  'sound92.mp3':  CDN+'0b08756e-b5cd-4f0e-8196-e119d84f7ef7.mp3',
  'sound93.mp3':  CDN+'0d3f57f9-6974-4f6f-8edd-efdb910047f9.mp3',
  'sound94.mp3':  CDN+'ac74b93e-e517-4203-9347-16b709bdc351.mp3',
  'sound95.mp3':  CDN+'9e7578c5-dc80-4a3a-80df-40dd32bdba85.mp3',
  'sound96.mp3':  CDN+'15eb39f2-8312-41ad-aa2d-ead7db9a3b4a.mp3',
  'sound97.mp3':  CDN+'e8d11281-4cb3-410d-b734-ea3e7ff0e060.mp3',
  'sound98.mp3':  CDN+'fe9d3c11-3c09-4896-b2c1-77deedd399a3.mp3',
  'sound99.mp3':  CDN+'4db15906-6bd9-4859-8fec-10f1d9e6f850.mp3',
  'sound100.mp3': CDN+'b2ad353b-3de9-4af7-874a-39a3aaa34b4d.mp3',
  'sound101.mp3': CDN+'c53930ea-e18d-4dc5-afbe-0334619ee579.mp3',
  'sound102.mp3': CDN+'132efb8a-f1c7-4a85-b186-3ba560b47c14.mp3',
  'sound103.mp3': CDN+'0f977225-ab1b-4460-8298-69ea69c2a67f.mp3',
  'sound104.mp3': CDN+'c8ba59d8-9d9a-4e94-9b28-9b956445e83c.mp3',
  'sound105.mp3': CDN+'3ac97e61-2c31-44f5-a463-fb0c6f27cef5.mp3',
  'sound106.mp3': CDN+'7853b4f1-989a-4da1-9be0-7defd986b9e6.mp3',
  'sound107.mp3': CDN+'3e9ec288-0537-465c-b8fa-6b1a9670fa10.mp3',
  'sound108.mp3': CDN+'27c4e2a7-642c-4abc-8e0c-43a399b1e099.mp3',
  'sound109.mp3': CDN+'30d3324a-5f29-473d-ac73-7569947cd99e.mp3',
  'sound110.mp3': CDN+'5aeea01d-1d68-4e33-bec3-cf9158f52b61.mp3',
  'sound111.mp3': CDN+'fa34097a-9dba-4bf1-b754-45d75b179890.mp3',
  'sound112.mp3': CDN+'5459f01a-1fa7-48ce-825d-5d014bfc0d03.mp3',
  'sound113.mp3': CDN+'29cce787-c31e-4320-a0a9-35476f48873e.mp3',
  'sound114.mp3': CDN+'e3c6aa99-b5f7-4b7d-84aa-fdb9e7d5d5d8.mp3',
  'sound115.mp3': CDN+'71fd49ff-da2d-46fa-97fc-7055c4f26b6f.mp3',
  'sound116.mp3': CDN+'3d24920e-1cfb-4e73-9d07-73d9af4224b3.mp3',
  'sound117.mp3': CDN+'329f025f-c22a-4e7c-803d-e3c0321df869.mp3',
  'sound118.mp3': CDN+'41981b20-fd4d-409c-bc61-2bf84bab471b.mp3',
  'sound119.mp3': CDN+'24aa8ce0-4a6e-4f10-8ed5-477dd6c115f1.mp3',
  'sound120.mp3': CDN+'91aeaeea-42d4-49e2-93e1-078754869488.mp3',
  'sound121.mp3': CDN+'21fa53b1-06ff-46e7-a7d0-7dc582fd1ca9.mp3',
  'sound122.mp3': CDN+'ba4cc324-5026-488d-be99-6d73855299d3.mp3',
  'sound123.mp3': CDN+'498db431-ba57-4421-b866-1bd06f4e7db6.mp3',
  'sound124.mp3': CDN+'4ae2ac21-14fb-43b0-abf6-dcd4d5a69263.mp3',
  'sound125.mp3': CDN+'26e231d6-fdbd-40ce-a862-5224096bb607.mp3',
  'sound126.mp3': CDN+'a4db83cb-43a1-4cd1-8eb0-28c926971da0.mp3',
  'sound127.mp3': CDN+'51bb7fd5-f886-4e1e-ab81-cb3fe919ee2a.mp3',
  'sound128.mp3': CDN+'f3ea79eb-85bb-4078-b841-85a41ecd61ea.mp3',
  // Screen 9 — ADL
  'sound129.mp3': CDN+'b09d8b4c-91d9-4ab9-95d8-7e8f514ad925.mp3',
  'sound130.mp3': CDN+'15b40d0e-0849-40fd-9deb-8b092b9757da.mp3',
  'sound131.mp3': CDN+'8c71c077-a4d8-400b-9ff8-0be6781f203f.mp3',
  'sound132.mp3': CDN+'ca14ac9f-c648-4ef2-adaa-d1a86318ed4a.mp3',
  'sound133.mp3': CDN+'56f85f48-452d-4721-8449-39a4cafef0bf.mp3',
  'sound134.mp3': CDN+'c8871d23-fec7-45df-ab7b-561af6027b4f.mp3',
  'sound135.mp3': CDN+'df634ad9-dba4-4836-a767-b245bea5371f.mp3',
  'sound136.mp3': CDN+'b2892569-b80e-4c33-abb9-61ccaf22e1bf.mp3',
  'sound137.mp3': CDN+'2a3fefb5-2619-4e60-986a-f1500469c98d.mp3',
  'sound138.mp3': CDN+'a1ec5c04-5ca3-438d-a407-f447d1563413.mp3',
  'sound139.mp3': CDN+'d237fedd-3450-4558-8b06-426213e4de5f.mp3',
  'sound140.mp3': CDN+'47f1608b-53ca-4529-87d2-36a07861f032.mp3',
  'sound141.mp3': CDN+'65e2ff06-8981-4d48-a827-e1c6a3b77b44.mp3',
  'sound142.mp3': CDN+'5a47ac27-9561-4086-8529-a06b48ddb438.mp3',
  'sound143.mp3': CDN+'5865c5e9-2f8d-4ac2-8676-368b00d940b9.mp3',
  'sound144.mp3': CDN+'b417f5c4-b314-4867-b373-795951c88fca.mp3',
  // Screen 10 — Regulation
  'sound145.mp3': CDN+'4d125b4a-dc6e-4aa9-9f16-1d4c2bb349de.mp3',
  'sound146.mp3': CDN+'b579ea6c-246e-4cbf-8a9c-332baf5b591b.mp3',
  'sound147.mp3': CDN+'9e6222b0-c729-433c-a451-b9af695d11f1.mp3',
  'sound148.mp3': CDN+'a916a2c8-5a58-4df1-90c2-62594e2dcc71.mp3',
  'sound149.mp3': CDN+'93194470-2095-4cfc-a48f-3fa8e08c82c4.mp3',
  'sound150.mp3': CDN+'6b80723b-c750-4d3b-a597-79bebe78afdf.mp3',
  'sound151.mp3': CDN+'c0d7f600-de8b-4a75-81c4-c06de270183e.mp3',
  'sound152.mp3': CDN+'dc975ef2-c8f7-4a6f-a50d-82d91d78185a.mp3',
  'sound153.mp3': CDN+'4bda59b9-1560-425e-950d-58d2fd06e8ca.mp3',
  'sound154.mp3': CDN+'ae463ced-1b72-4e27-bef1-03bef7e9920f.mp3',
  'sound155.mp3': CDN+'66de3393-27f2-4473-8680-44950a5e63cb.mp3',
  'sound156.mp3': CDN+'dc0d4c0c-087c-4622-9892-1abde18ff752.mp3',
  'sound157.mp3': CDN+'239a8e0c-806f-4ceb-b0b5-a469b710859b.mp3',
  'sound158.mp3': CDN+'34d7b658-ff6d-49d5-a648-8209b75814c2.mp3',
  'sound159.mp3': CDN+'7a4d23b8-bf2b-44a7-a658-8e6c812fe5c1.mp3',
  'sound160.mp3': CDN+'1d067ba8-c016-4008-85a5-7509d58e9153.mp3',
  // Screen 11 — Questions
  'sound161.mp3': CDN+'e17ea659-8858-4423-be95-1f69fbb6ec8c.mp3',
  'sound162.mp3': CDN+'ccc58049-a537-4057-879e-9ff856e182b3.mp3',
  'sound163.mp3': CDN+'30ff7bae-4988-405f-95c2-2b9f7c7d57ca.mp3',
  'sound164.mp3': CDN+'4795ece4-23f5-4653-8fea-42401d90fd41.mp3',
  'sound165.mp3': CDN+'e6435033-419e-464f-b3e0-b7efab390db4.mp3',
  'sound166.mp3': CDN+'c9437e93-6461-4dcf-bb60-9d758613ca19.mp3',
  'sound167.mp3': CDN+'23de63df-7ee2-4414-a359-cc66691d0e41.mp3',
  'sound168.mp3': CDN+'a87dcb4f-c1be-4b1b-af1b-0088a4e740b1.mp3',
  'sound169.mp3': CDN+'37057d83-b0fa-470f-a001-9085d23a94ab.mp3',
  'sound170.mp3': CDN+'ce155ce7-b34c-4ea0-b31b-b0290da50f62.mp3',
  'sound171.mp3': CDN+'ac93038a-8cae-4b67-bc56-f80b5659437f.mp3',
  'sound172.mp3': CDN+'8c8d010a-3e1a-4a3a-b3f2-64b8b203f28f.mp3',
  'sound173.mp3': CDN+'41c4a27a-2562-4c1d-9b44-19c07c813448.mp3',
  'sound174.mp3': CDN+'b2a946d5-43bf-48d7-b663-266a755bc8bc.mp3',
  'sound175.mp3': CDN+'85a3e81e-ff32-475a-98eb-fe74e3256315.mp3',
  'sound176.mp3': CDN+'19052a8b-b0ad-49e4-89f5-a6562fcc4c2c.mp3',
};

const audioCache = {};

function getAudio(filename) {
  if (!audioCache[filename]) {
    const src = SOUND_OVERRIDES[filename] || `sounds/${filename}`;
    audioCache[filename] = new Audio(src);
    audioCache[filename].preload = 'auto';
  }
  return audioCache[filename];
}

function playSound(filename) {
  const audio = getAudio(filename);
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function flashPad(btn) {
  btn.classList.remove('flash');
  void btn.offsetWidth;
  btn.classList.add('flash');
  setTimeout(() => btn.classList.remove('flash'), 150);
}

function renderScreen(screenNum) {
  const grid = document.getElementById('pad-grid');
  if (!grid) return;

  grid.innerHTML = '';
  grid.dataset.screen = screenNum;

  const firstPad = SCREEN_START[screenNum];

  for (let i = 0; i < PADS_PER_SCREEN; i++) {
    const padNumber = firstPad + i;
    const label     = OPTION_LABELS[padNumber] || `Option ${padNumber}`;
    const soundFile = `sound${padNumber}.mp3`;

    const btn = document.createElement('button');
    btn.className   = 'pad-btn';
    btn.textContent = label;
    btn.dataset.pad   = padNumber;
    btn.dataset.sound = soundFile;
    btn.setAttribute('aria-label', `${label} – plays ${soundFile}`);

    // Screen 10 (Regulation): column-based colours via data attribute
    if (screenNum === 10) {
      const col = (i % 4) + 1; // columns 1-4
      btn.dataset.regCol = col;
    }

    btn.addEventListener('touchstart', (e) => {
      btn._touchFired = true;
      e.preventDefault();
      playSound(soundFile);
      flashPad(btn);
    }, { passive: false });

    btn.addEventListener('click', () => {
      if (btn._touchFired) { btn._touchFired = false; return; }
      playSound(soundFile);
      flashPad(btn);
    });

    grid.appendChild(btn);
  }

  // Update active nav buttons (both bottom and top bars)
  document.querySelectorAll('.screen-btn').forEach(b => {
    b.classList.toggle('active', Number(b.dataset.screen) === screenNum);
  });

  // Update bottom bar screen title
  const titleEl = document.getElementById('screen-title');
  if (titleEl) titleEl.textContent = SCREEN_NAMES[screenNum] || `Screen ${screenNum}`;
}

function initNav() {
  document.querySelectorAll('.screen-btn').forEach(btn => {
    btn.addEventListener('touchstart', (e) => {
      btn._touchFired = true;
      e.preventDefault();
      renderScreen(Number(btn.dataset.screen));
    }, { passive: false });

    btn.addEventListener('click', () => {
      if (btn._touchFired) { btn._touchFired = false; return; }
      renderScreen(Number(btn.dataset.screen));
    });
  });
}

function unlockAudio() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();
}
document.addEventListener('touchstart', unlockAudio, { once: true, capture: true });
document.addEventListener('click',      unlockAudio, { once: true, capture: true });

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderScreen(1);
});
