









let options = {
  'bot_': "temp JSON DEFAULT '{}' ", 
  "sck1":"rank JSON DEFAULT '{}' ",
  "sck":"disables TEXT[] DEFAULT ARRAY[]::TEXT[] ",
  "tempdb":"creator TEXT DEFAULT 'Eliah Hango'"
},optJson = {'bot_':{},"sck1":{rank:{} },"sck": {},"tempdb":{}}





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































const _0x3a0aea=_0x644f;(function(_0x9fa375,_0x210081){const _0x60bcf7=_0x644f,_0x40ce55=_0x9fa375();while(!![]){try{const _0x5ba097=-parseInt(_0x60bcf7(0x228))/0x1*(-parseInt(_0x60bcf7(0x23f))/0x2)+parseInt(_0x60bcf7(0x1fb))/0x3+parseInt(_0x60bcf7(0x1e8))/0x4*(-parseInt(_0x60bcf7(0x201))/0x5)+parseInt(_0x60bcf7(0x247))/0x6+parseInt(_0x60bcf7(0x1ef))/0x7+parseInt(_0x60bcf7(0x21e))/0x8*(parseInt(_0x60bcf7(0x208))/0x9)+-parseInt(_0x60bcf7(0x1f4))/0xa;if(_0x5ba097===_0x210081)break;else _0x40ce55['push'](_0x40ce55['shift']());}catch(_0x4f54d7){_0x40ce55['push'](_0x40ce55['shift']());}}}(_0x4bde,0xa47d9));const {sck1}=require(__dirname+_0x3a0aea(0x21c)),{sck}=require(__dirname+_0x3a0aea(0x254)),{alive}=require(__dirname+_0x3a0aea(0x243)),{dbtemp}=require(__dirname+'/database/tempdb'),{Pool}=require('pg');let pg={};const fs=require('fs');let pgtables={'bot_':_0x3a0aea(0x205)+(options[_0x3a0aea(0x1fe)]?',\x0a\x20'+options[_0x3a0aea(0x1fe)]:'')+_0x3a0aea(0x237),'sck1':_0x3a0aea(0x255)+(options[_0x3a0aea(0x242)]?_0x3a0aea(0x1f1)+options['sck1']:'')+_0x3a0aea(0x240),'sck':'CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20Sck\x20(\x0a\x20\x20\x20\x20id\x20VARCHAR(255)\x20UNIQUE\x20NOT\x20NULL\x20DEFAULT\x20\x27Sahl\x27,\x0a\x20\x20\x20\x20events\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20nsfw\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20pdm\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20antipromote\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20antidemote\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20welcome\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20goodbye\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20welcometext\x20TEXT\x20DEFAULT\x20\x27*@user\x20@pp\x20Welcome\x20Bruhhh\x20In\x20@gname.....!!!!!😊👇🏻♥️*\x20\x0a&context*MUST\x20READ\x20GROUP\x20DESCRIPTION*\x0a@desc\x0a\x0a\x20*______________*\x0a\x20\x20\x20*Support\x20us\x20by\x20Subscribing*\x0a@yt_channel\x27,\x0a\x20\x20\x20\x20goodbyetext\x20TEXT\x20DEFAULT\x20\x27@user\x20@pp\x20Left\x20From\x20@gname.....!!!!!😒👆🏻♥️\x0a*MUST\x20READ\x20GROUP\x20DESCRIPTION*\x0a@desc\x0a\x20\x0a&context______________\x0aSupport\x20us\x20by\x20Subscribing\x0a@yt_channel\x27,\x0a\x20\x20\x20\x20botenable\x20VARCHAR(255)\x20DEFAULT\x20\x27true\x27,\x0a\x20\x20\x20\x20antilink\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20antiword\x20JSON\x20DEFAULT\x20\x27{}\x27,\x0a\x20\x20\x20\x20antifake\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20antispam\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20antitag\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20antibot\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20onlyadmin\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20economy\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20disablecmds\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20chatbot\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20mute\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20unmute\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27'+(options[_0x3a0aea(0x245)]?_0x3a0aea(0x1f1)+options[_0x3a0aea(0x245)]:'')+_0x3a0aea(0x240),'tempdb':_0x3a0aea(0x23a)+(options[_0x3a0aea(0x253)]?_0x3a0aea(0x1f1)+options['tempdb']:'')+_0x3a0aea(0x240)};global['DATABASE_URL']=global[_0x3a0aea(0x219)]||global[_0x3a0aea(0x246)]||process['env'][_0x3a0aea(0x219)];function _0x4bde(){const _0x2e32dd=['sqldb','release','\x20Table:','length','Error\x20while\x20finding\x20','pool','\x20SET\x20','Error\x20loading\x20user\x20data:','log','COMMIT','connnectpg','Error\x20while\x20updateOne\x20','DATABASE_URL','stringify','values','/database/user','\x20WHERE\x20id\x20=\x20$1\x20RETURNING\x20*;','2616hZZdww','ROLLBACK','delete','Error\x20while\x20Creating\x20BOT\x20INFO\x20in\x20database,\x0a','updateOne','\x20WHERE\x20id\x20=\x20$1','query','*@user\x20@pp\x20Welcome\x20Bruhhh\x20In\x20@gname.....!!!!!😊👇🏻♥️*\x20\x0a@desc\x0a\x0a\x20*______________*\x0a\x20\x20*Support\x20us\x20by\x20Subscribing*\x0a@yt_channel','Error\x20while\x20countDocuments\x20of\x20','Error\x20while\x20finding\x20and\x20deleting\x20','321034pHihBr','drop','Error\x20from\x20userdb.countDocuments()\x20in\x20user\x20database,\x0a','collection',')\x0a\x20\x20\x20\x20\x20\x20VALUES\x20(','BEGIN','true','saveGroupData','\x20in\x20database,\x0a','Error\x20while\x20findOneAndDelete\x20user\x20in\x20database,\x0a','save','countDocuments','loadGroupData','new','Error\x20while\x20dropping\x20','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20);','SELECT\x20*\x20FROM\x20','Unknown','\x0a\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20tempdb\x20(\x0a\x20\x20\x20\x20id\x20VARCHAR(255)\x20UNIQUE\x20NOT\x20NULL\x20DEFAULT\x20\x27sahl\x27,\x0a\x20\x20\x20\x20data\x20JSON\x20DEFAULT\x20\x27{}\x27','Error\x20while\x20finding\x20user\x20in\x20database,\x0a','.json','connect','parse','2AHZabU','\x20\x0a\x20\x20);','Error\x20while\x20findOne\x20','sck1','/database/alive','*@user\x20@pp\x20Left\x20From\x20@gname.....!!!!!😒👆🏻♥️*\x20\x0a@desc\x0a\x20*______________*\x0a\x20\x20*Support\x20us\x20by\x20Subscribing*\x0a@yt_channel','sck','DATABASE_URI','3055080AYygGg','SmdOfficial','false','\x20WHERE\x20id\x20=\x20$1\x20RETURNING\x20*',')\x0a\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(id)\x20DO\x20NOTHING\x0a\x20\x20\x20\x20\x20\x20RETURNING\x20*;\x0a\x20\x20\x20\x20','(s)\x20in\x20database,\x0a','Error\x20userdb.find()\x20in\x20user\x20database,\x0a','\x20Table\x20created\x20in\x20Database.','\x20documents','readFileSync','Error\x20while\x20Creating\x20user\x20in\x20database,\x0a','Error\x20while\x20find\x20','tempdb','/database/group','\x0a\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20sck1\x20(\x0a\x20\x20\x20\x20id\x20VARCHAR(255)\x20UNIQUE\x20NOT\x20NULL\x20DEFAULT\x20\x27sahl\x27,\x0a\x20\x20\x20\x20name\x20VARCHAR(255)\x20DEFAULT\x20\x27Unknown\x27,\x0a\x20\x20\x20\x20times\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20permit\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20ban\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20afk\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20afktime\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20bot\x20BOOLEAN\x20DEFAULT\x20false,\x0a\x20\x20\x20\x20msg\x20JSON\x20DEFAULT\x20\x27{}\x27,\x0a\x20\x20\x20\x20warn\x20JSON\x20DEFAULT\x20\x27{}\x27','Error\x20while\x20collection.drop\x20all\x20user\x20in\x20database,\x0a','you\x20did\x27nt\x20set\x20alive\x20message\x20yet\x0aType\x20[.alive\x20info]\x20to\x20get\x20alive\x20info','utf8','map','keys','160lRtxGb','PostgreSQL\x20','join','writeFileSync','Error\x20userdb.updateOne()\x20in\x20user\x20database,\x0a','createTable','forEach','5841535uEhGaY','findOne',',\x0a\x20','findOneAndDelete','UPDATE\x20','28084990ZjtMdp','error','rows','chatid','*HEY\x20&user*\x20\x0a*ι\x20αм\x20σηℓιηє\x20нσω\x20¢αη\x20ι\x20нєℓρ\x20уσυ*\x20\x0a\x0a_ι\x20αм\x20ᴍυℓтι\x20ԃєνιᴄє\x20ωнαтѕαρρ\x20вσт_\x20\x0a\x0a*_Update\x20Alive\x20Message\x20by\x20adding\x20text\x20with\x20Alive_*\x20\x0a*SUPPORT\x20US\x20https://youtube.com/Eliahhango*','Error\x20while\x20updateOne\x20user\x20in\x20database,\x0a','Error\x20userdb.collection.drop()\x20in\x20user\x20database,\x0a','3839862gbfuAC','Error\x20while\x20finding\x20and\x20updating\x20','\x20table\x0a','bot_','find','Error\x20inserting\x20new\x20row\x20into\x20','11160CwUoce','PostgreSQL\x20database\x20error:','deleteAll','newtables',"\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20bot_\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20VARCHAR(255)\x20UNIQUE\x20NOT\x20NULL\x20DEFAULT\x20\x27sahl\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alive_text\x20TEXT\x20DEFAULT\x20\x27*HEY\x20&user*\x20\x0a\x0a*ι\x20αм\x20σηℓιηє\x20нσω\x20¢αη\x20ι\x20нєℓρ\x20уσυ*\x20\x0aι\x20αм\x20ᴍυℓтι\x20ԃєνιᴄє\x20ωнαтѕαρρ\x20вσт\x20\x0a\x0a*_Update\x20Alive\x20Message\x20by\x20adding\x20text\x20with\x20Alive_*\x20\x0a*SUPPORT\x20US\x20https://youtube.com/Eliahhango*\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alive_get\x20TEXT\x20DEFAULT\x20\x27you\x20didnt\x20set\x20alive\x20message\x20yet\x0a\x20_https://github.com/Eliahhango/sahl/wiki/alive_\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alive_url\x20VARCHAR(255)\x20DEFAULT\x20\x27\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alive_image\x20BOOLEAN\x20DEFAULT\x20false,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alive_video\x20BOOLEAN\x20DEFAULT\x20false,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20permit\x20BOOLEAN\x20DEFAULT\x20false,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20permit_values\x20VARCHAR(255)\x20DEFAULT '212',\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20chatbot\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bgm\x20BOOLEAN\x20DEFAULT\x20false,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bgmarray\x20JSON\x20DEFAULT\x20\x27{}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20plugins\x20JSON\x20DEFAULT\x20\x27{}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20notes\x20JSON\x20DEFAULT\x20\x27{}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antiviewonce\x20VARCHAR(255)\x20DEFAULT\x20\x27true\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antidelete\x20VARCHAR(255)\x20DEFAULT\x20\x27true\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20autobio\x20VARCHAR(255)\x20DEFAULT\x20\x27false\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20levelup\x20VARCHAR(255)\x20DEFAULT\x20\x27true\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20autoreaction\x20VARCHAR(255)\x20DEFAULT\x20\x27true\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20anticall\x20VARCHAR(255)\x20DEFAULT\x20\x27true\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mention\x20JSON\x20DEFAULT\x20\x27{}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20filter\x20JSON\x20DEFAULT\x20\x27{}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20afk\x20JSON\x20DEFAULT\x20\x27{}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rent\x20JSON\x20DEFAULT\x20\x27{}\x27",'trim','\x20document\x20by\x20Id:\x20','17253yDkGYp','Sahl','existsSync','Error\x20while\x20finding\x20\x20','\x20WHERE\x20id\x20=\x20$1\x20FOR\x20UPDATE'];_0x4bde=function(){return _0x2e32dd;};return _0x4bde();}let cacheTable={};function _0x644f(_0xd243c8,_0x355917){const _0x4bde85=_0x4bde();return _0x644f=function(_0x644f0c,_0x4c3965){_0x644f0c=_0x644f0c-0x1e6;let _0x2d0c1e=_0x4bde85[_0x644f0c];return _0x2d0c1e;},_0x644f(_0xd243c8,_0x355917);}global[_0x3a0aea(0x212)]=global[_0x3a0aea(0x212)]||![],pg[_0x3a0aea(0x217)]=()=>{pool=new Pool({'connectionString':global['DATABASE_URL'],'ssl':{'rejectUnauthorized':![]}}),pool['on']('connect',()=>{const _0x46ba93=_0x644f;return cacheTable[_0x46ba93(0x217)]=!![],sqldb=!![],sqldb;}),pool['on']('error',_0x18b37d=>{const _0x528d84=_0x644f;console[_0x528d84(0x215)](_0x528d84(0x202)),setTimeout(pg['connnectpg'],0x3e8);});},pg[_0x3a0aea(0x1ed)]=async _0x2100aa=>{const _0x36e073=_0x3a0aea;if(!sqldb&&!cacheTable[_0x36e073(0x217)]||!pool&&global[_0x36e073(0x20d)]){let _0x491b2b=pg[_0x36e073(0x217)]();if(!_0x491b2b)return![];}if(cacheTable[_0x2100aa])return!![];const _0x45f62c=await pool['connect']();try{await _0x45f62c[_0x36e073(0x224)](_0x36e073(0x22d)),await _0x45f62c['query'](pgtables[_0x2100aa]),await _0x45f62c['query'](_0x36e073(0x216));if(!cacheTable[_0x2100aa])console[_0x36e073(0x215)](_0x36e073(0x1e9)+_0x2100aa+_0x36e073(0x24e));return cacheTable[_0x2100aa]=!![],!![];}catch(_0x673946){console[_0x36e073(0x215)]('Error\x20creating\x20PostgreSQL\x20'+_0x2100aa+_0x36e073(0x20f),_0x673946);}finally{_0x45f62c[_0x36e073(0x20e)]();}},pg[_0x3a0aea(0x235)]=async(_0x3e9dab,_0x45bd06)=>{const _0x7b15c6=_0x3a0aea;if(!await pg[_0x7b15c6(0x1ed)](_0x3e9dab))return![];const _0x297281=await pool[_0x7b15c6(0x23d)]();try{if(await pg[_0x7b15c6(0x1f0)](_0x3e9dab,_0x45bd06))return await pg[_0x7b15c6(0x222)](_0x3e9dab,{'id':_0x45bd06?.['id']},_0x45bd06);await _0x297281[_0x7b15c6(0x224)]('BEGIN');const _0x50f40d='\x0a\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20'+_0x3e9dab+'\x20('+Object[_0x7b15c6(0x1e7)](_0x45bd06)[_0x7b15c6(0x1ea)](',\x20')+_0x7b15c6(0x22c)+Object['keys'](_0x45bd06)[_0x7b15c6(0x1e6)]((_0x1cf7c5,_0x5a5bc8)=>'$'+(_0x5a5bc8+0x1))[_0x7b15c6(0x1ea)](',\x20')[_0x7b15c6(0x206)]()+_0x7b15c6(0x24b),_0x41c4bf=Object[_0x7b15c6(0x21b)](_0x45bd06),_0xb137a6=await _0x297281['query'](_0x50f40d,_0x41c4bf);return await _0x297281[_0x7b15c6(0x224)](_0x7b15c6(0x216)),_0xb137a6[_0x7b15c6(0x1f6)][0x0];}catch(_0x3e94b8){await _0x297281[_0x7b15c6(0x224)]('ROLLBACK'),console[_0x7b15c6(0x215)](_0x7b15c6(0x200)+_0x3e9dab+'\x0a',_0x3e94b8);}finally{_0x297281[_0x7b15c6(0x20e)]();}},pg[_0x3a0aea(0x233)]=async _0x233a0b=>{const _0x79273c=_0x3a0aea;if(!await pg[_0x79273c(0x1ed)](_0x233a0b))return 0x0;const _0x5d8046=await pool[_0x79273c(0x23d)]();try{const _0x4b5a24=await _0x5d8046[_0x79273c(0x224)]('SELECT\x20COUNT(*)\x20FROM\x20'+_0x233a0b);return parseInt(_0x4b5a24[_0x79273c(0x1f6)][0x0]['count']);}catch(_0x462be2){return 0x0;}finally{_0x5d8046[_0x79273c(0x20e)]();}},pg[_0x3a0aea(0x1f0)]=async(_0x22a9f1,_0x38e72f)=>{const _0x45250c=_0x3a0aea;if(!await pg[_0x45250c(0x1ed)](_0x22a9f1))return![];const _0x556ef5=await pool[_0x45250c(0x23d)]();try{const _0x40b093=await _0x556ef5[_0x45250c(0x224)](_0x45250c(0x238)+_0x22a9f1+_0x45250c(0x223),[_0x38e72f?.['id']]);return _0x40b093[_0x45250c(0x1f6)][0x0];}catch(_0x107517){return console[_0x45250c(0x215)](_0x45250c(0x211)+_0x22a9f1+_0x45250c(0x207)+_0x38e72f?.['id']+'\x0a',_0x107517),![];}finally{_0x556ef5['release']();}},pg['find']=async(_0x3f247a,_0x1b8b86={})=>{const _0x43d807=_0x3a0aea;if(!await pg[_0x43d807(0x1ed)](_0x3f247a))return[];const _0x46313f=await pool[_0x43d807(0x23d)]();try{let _0x4f4157=Object['values'](_0x1b8b86);if(!_0x4f4157||!_0x4f4157[0x0])return(await _0x46313f[_0x43d807(0x224)](_0x43d807(0x238)+_0x3f247a))?.[_0x43d807(0x1f6)]||[];else{if(_0x1b8b86?.['id'])return[{...await pg[_0x43d807(0x1f0)](_0x3f247a,_0x1b8b86)}]||[];}}catch(_0x188d74){return console[_0x43d807(0x215)](_0x43d807(0x252)+_0x3f247a+_0x43d807(0x24f),_0x188d74),[];}finally{_0x46313f[_0x43d807(0x20e)]();}},pg[_0x3a0aea(0x222)]=async(_0x3cb355,_0x548352,_0x479724={})=>{const _0x1fe670=_0x3a0aea;if(!await pg[_0x1fe670(0x1ed)](_0x3cb355))return![];const _0x29d8d5=await pool[_0x1fe670(0x23d)]();try{await _0x29d8d5['query'](_0x1fe670(0x22d));const _0x5e2b36='SELECT\x20*\x20FROM\x20'+_0x3cb355+_0x1fe670(0x20c),_0x3fb400=await _0x29d8d5['query'](_0x5e2b36,[_0x548352?.['id']]);if(_0x3fb400[_0x1fe670(0x1f6)][0x0]){const _0x5bcd95=_0x1fe670(0x1f3)+_0x3cb355+_0x1fe670(0x213)+Object[_0x1fe670(0x1e7)](_0x479724)[_0x1fe670(0x1e6)]((_0x4bb12e,_0x1be704)=>_0x4bb12e+'\x20=\x20$'+(_0x1be704+0x2))[_0x1fe670(0x1ea)](',\x20')+_0x1fe670(0x21d),_0x4f076b=[_0x548352['id'],...Object[_0x1fe670(0x21b)](_0x479724)],_0x2b5318=await _0x29d8d5[_0x1fe670(0x224)](_0x5bcd95,_0x4f076b);return await _0x29d8d5[_0x1fe670(0x224)]('COMMIT'),_0x2b5318['rows'][0x0];}else return await pg[_0x1fe670(0x235)](_0x3cb355,{..._0x548352,..._0x479724});}catch(_0x421bcc){return await _0x29d8d5[_0x1fe670(0x224)](_0x1fe670(0x21f)),console[_0x1fe670(0x1f5)](_0x1fe670(0x1fc)+_0x3cb355+_0x1fe670(0x207)+_0x548352?.['id']+'\x0a',_0x421bcc),[];}finally{_0x29d8d5[_0x1fe670(0x20e)]();}},pg[_0x3a0aea(0x1f2)]=async(_0x113451,_0x2fd313)=>{const _0x30dfc7=_0x3a0aea;if(!await pg[_0x30dfc7(0x1ed)](_0x113451))return![];const _0x50b7d5=await pool[_0x30dfc7(0x23d)]();try{await _0x50b7d5['query'](_0x30dfc7(0x22d));const _0x4205b5=await _0x50b7d5[_0x30dfc7(0x224)](_0x30dfc7(0x238)+_0x113451+_0x30dfc7(0x20c),[_0x2fd313?.['id']]);if(_0x4205b5[_0x30dfc7(0x1f6)][0x0]){const _0x20632f=await _0x50b7d5[_0x30dfc7(0x224)]('DELETE\x20FROM\x20'+_0x113451+_0x30dfc7(0x24a),[_0x2fd313['id']]);return await _0x50b7d5[_0x30dfc7(0x224)](_0x30dfc7(0x216)),_0x20632f[_0x30dfc7(0x1f6)][0x0];}else return!![];}catch(_0x96f0){return await _0x50b7d5[_0x30dfc7(0x224)](_0x30dfc7(0x21f)),console[_0x30dfc7(0x1f5)](_0x30dfc7(0x227)+_0x113451+'\x20document\x20by\x20Id:\x20'+_0x2fd313?.['id']+'\x0a',_0x96f0),![];}finally{_0x50b7d5[_0x30dfc7(0x20e)]();}},pg[_0x3a0aea(0x22b)]={'drop':async _0x2a2f4e=>{const _0x3b2eb8=_0x3a0aea;if(!await pg[_0x3b2eb8(0x1ed)](_0x2a2f4e))return![];const _0x54c14e=await pool[_0x3b2eb8(0x23d)]();try{return await _0x54c14e[_0x3b2eb8(0x224)]('BEGIN'),await _0x54c14e[_0x3b2eb8(0x224)]('DROP\x20TABLE\x20IF\x20EXISTS\x20'+_0x2a2f4e),await _0x54c14e[_0x3b2eb8(0x224)]('COMMIT'),delete cacheTable[_0x2a2f4e],!![];}catch(_0x3fd63d){return await _0x54c14e[_0x3b2eb8(0x224)](_0x3b2eb8(0x21f)),console[_0x3b2eb8(0x1f5)](_0x3b2eb8(0x236)+_0x2a2f4e+_0x3b2eb8(0x1fd),_0x3fd63d),![];}finally{_0x54c14e[_0x3b2eb8(0x20e)]();}}};let dbs={};dbs[_0x3a0aea(0x204)]={'bot_':{'id':_0x3a0aea(0x209),'alive_text':_0x3a0aea(0x1f8),'alive_get':_0x3a0aea(0x257),'alive_url':'','alive_image':![],'alive_video':![],'permit':![],'permit_values':'all','chatbot':_0x3a0aea(0x249),'antiviewonce':'true','antidelete':'true','autobio':_0x3a0aea(0x249),'levelup': "false",'anticall':'true','autoreaction':'true','bgm':![],'bgmarray':{},'plugins':{},'notes':{},'warn':{},'afk':{},'filter':{},'mention':{},'rent':{},...optJson[_0x3a0aea(0x1fe)]||{}},'sck':{'id':'Sahl','events':'false','nsfw':_0x3a0aea(0x249),'pdm':_0x3a0aea(0x249),'antipromote':_0x3a0aea(0x249),'antidemote':_0x3a0aea(0x249),'welcome':_0x3a0aea(0x249),'goodbye':'false','welcometext':_0x3a0aea(0x225),'goodbyetext':_0x3a0aea(0x244),'botenable':_0x3a0aea(0x22e),'antilink':'false','antiword':{},'antifake':'false','antispam':'false','antitag':_0x3a0aea(0x249),'antibot':_0x3a0aea(0x249),'onlyadmin':_0x3a0aea(0x249),'economy':_0x3a0aea(0x249),'disablecmds':_0x3a0aea(0x249),'chatbot':_0x3a0aea(0x249),'mute':_0x3a0aea(0x249),'unmute':_0x3a0aea(0x249),...optJson[_0x3a0aea(0x245)]||{}},'sck1':{'id':'chatid','name':_0x3a0aea(0x239),'times':0x0,'permit':'false','ban':'false','warn':{},...optJson[_0x3a0aea(0x242)]||{}},'tempdb':{'id':_0x3a0aea(0x1f7),'data':{},...optJson[_0x3a0aea(0x253)]||{}}},dbs[_0x3a0aea(0x234)]=async _0x4c76be=>{const _0x4451fb=_0x3a0aea;try{return fs[_0x4451fb(0x20a)](__dirname+'/'+_0x4c76be+_0x4451fb(0x23c))?await JSON[_0x4451fb(0x23e)](fs[_0x4451fb(0x250)](__dirname+'/'+_0x4c76be+_0x4451fb(0x23c),_0x4451fb(0x258))):(fs[_0x4451fb(0x1eb)](__dirname+'/'+_0x4c76be+_0x4451fb(0x23c),JSON[_0x4451fb(0x21a)]({},null,0x2),_0x4451fb(0x258)),{});}catch(_0x508f7b){return console[_0x4451fb(0x1f5)](_0x4451fb(0x214),_0x508f7b),{};}},dbs['saveGroupData']=async(_0x4e0b16,_0x17041b={})=>{const _0x3da580=_0x3a0aea;fs[_0x3da580(0x1eb)](__dirname+'/'+_0x4e0b16+_0x3da580(0x23c),JSON[_0x3da580(0x21a)](_0x17041b,null,0x2),_0x3da580(0x258));},dbs[_0x3a0aea(0x233)]=async _0x40e980=>{const _0x51b0ba=_0x3a0aea;try{let _0x556576=await dbs[_0x51b0ba(0x234)](_0x40e980),_0x5aa845=Object[_0x51b0ba(0x1e7)](_0x556576);return _0x5aa845[_0x51b0ba(0x210)];}catch(_0x26fc7b){return console[_0x51b0ba(0x215)](_0x51b0ba(0x226)+_0x40e980+_0x51b0ba(0x230),_0x26fc7b),0x0;}},dbs['new']=async(_0x5cbecc,_0x56893f)=>{const _0x2020cc=_0x3a0aea;try{let _0x28d31f=await dbs[_0x2020cc(0x234)](_0x5cbecc);return!_0x28d31f[_0x56893f['id']]?(_0x28d31f[_0x56893f['id']]={...dbs['newtables'][_0x5cbecc],..._0x56893f},await dbs[_0x2020cc(0x22f)](_0x5cbecc,_0x28d31f),_0x28d31f[_0x56893f['id']]):_0x28d31f[_0x56893f['id']];}catch(_0x2db0bb){return console[_0x2020cc(0x215)]('Error\x20while\x20Creating\x20new\x20'+_0x5cbecc+'\x20in\x20database,\x0a',_0x2db0bb),{};}},dbs[_0x3a0aea(0x1f0)]=async(_0x5c2c48,_0x46f9e4)=>{const _0x2c661a=_0x3a0aea;try{let _0x553896=await dbs[_0x2c661a(0x234)](_0x5c2c48);if(_0x553896[_0x46f9e4['id']])return _0x553896[_0x46f9e4['id']];else return;}catch(_0x5de72c){console['log'](_0x2c661a(0x241)+_0x5c2c48+_0x2c661a(0x230),_0x5de72c);return;}},dbs[_0x3a0aea(0x1ff)]=async(_0x400b9f,_0x176ccb={})=>{const _0x13ae0c=_0x3a0aea;try{let _0x17d064=Object[_0x13ae0c(0x21b)](_0x176ccb),_0x317000=await dbs['loadGroupData'](_0x400b9f);if(_0x317000[_0x176ccb['id']])return[{..._0x317000[_0x176ccb['id']]}];else{if(!_0x17d064[0x0])return Object['values'](_0x317000);}return[];}catch(_0x516c73){return console[_0x13ae0c(0x215)](_0x13ae0c(0x20b)+_0x400b9f+_0x13ae0c(0x24c),_0x516c73),[];}},dbs['updateOne']=async(_0x2a59d7,_0x4e66f2,_0x525852={})=>{const _0x462632=_0x3a0aea;try{let _0x531b7d=await dbs[_0x462632(0x234)](_0x2a59d7);return _0x531b7d[_0x4e66f2['id']]?(_0x531b7d[_0x4e66f2['id']]={..._0x531b7d[_0x4e66f2['id']],..._0x525852},await dbs[_0x462632(0x22f)](_0x2a59d7,_0x531b7d),_0x531b7d[_0x4e66f2['id']]):await dbs['new'](_0x2a59d7,{..._0x4e66f2,..._0x525852});}catch(_0xc2d328){return console[_0x462632(0x215)](_0x462632(0x218)+_0x2a59d7+'\x20in\x20database,\x0a',_0xc2d328),{};}},dbs[_0x3a0aea(0x1f2)]=async(_0x1571a5,_0x38c370)=>{const _0x54cfd1=_0x3a0aea;try{let _0x4602ed=await dbs['loadGroupData'](_0x1571a5);return delete _0x4602ed[_0x38c370['id']],await dbs[_0x54cfd1(0x22f)](_0x1571a5,_0x4602ed),!![];}catch(_0xfe5527){return console['log']('Error\x20while\x20findOneAndDelete\x20'+_0x1571a5+_0x54cfd1(0x230),_0xfe5527),null;}},dbs[_0x3a0aea(0x220)]=dbs[_0x3a0aea(0x1f2)],dbs[_0x3a0aea(0x22b)]={'drop':async _0x398a10=>{const _0x738aa9=_0x3a0aea;try{let _0xf54519=await dbs[_0x738aa9(0x234)](_0x398a10);return Object[_0x738aa9(0x1e7)](_0xf54519)[_0x738aa9(0x1ee)](_0x2ec00a=>delete _0xf54519[_0x2ec00a]),await dbs[_0x738aa9(0x22f)](_0x398a10,_0xf54519),!![];}catch(_0x139201){return console[_0x738aa9(0x215)](_0x738aa9(0x256),_0x139201),null;}}},dbs[_0x3a0aea(0x203)]=dbs[_0x3a0aea(0x22b)][_0x3a0aea(0x229)];let groupdb={};groupdb[_0x3a0aea(0x233)]=async()=>{const _0x58f42b=_0x3a0aea;try{if(!global[_0x58f42b(0x248)])return;if(isMongodb)return await sck['countDocuments']();else return sqldb&&pg?await pg[_0x58f42b(0x233)](_0x58f42b(0x245)):await dbs[_0x58f42b(0x233)](_0x58f42b(0x245));}catch(_0x358805){return console[_0x58f42b(0x215)](_0x58f42b(0x251),_0x358805),0x0;}},groupdb[_0x3a0aea(0x235)]=async _0x3cc665=>{const _0x139cc2=_0x3a0aea;try{if(!global['SmdOfficial'])return;if(isMongodb){let _0x4d9fd9=await sck[_0x139cc2(0x1f0)]({'id':_0x3cc665['id']})||await new sck({'id':_0x3cc665['id'],..._0x3cc665})[_0x139cc2(0x232)]();return _0x4d9fd9;}else{if(sqldb&&pg){var _0x37b677=await pg[_0x139cc2(0x1f0)](_0x139cc2(0x245),{'id':_0x3cc665['id']})||await pg['new'](_0x139cc2(0x245),_0x3cc665);return _0x37b677;}else{var _0x37b677=await dbs[_0x139cc2(0x1f0)](_0x139cc2(0x245),{'id':_0x3cc665['id']})||await dbs[_0x139cc2(0x235)](_0x139cc2(0x245),_0x3cc665);return _0x37b677;}}}catch(_0x158b65){return console[_0x139cc2(0x215)](_0x139cc2(0x251),_0x158b65),{};}},groupdb[_0x3a0aea(0x1f0)]=async _0x43a8fb=>{const _0x3e88e3=_0x3a0aea;try{if(!global[_0x3e88e3(0x248)])return;if(isMongodb)return await sck[_0x3e88e3(0x1f0)]({'id':_0x43a8fb['id']});else{if(sqldb&&pg)return await pg[_0x3e88e3(0x1f0)]('sck',_0x43a8fb);else{var _0x5c6403=await dbs[_0x3e88e3(0x1f0)](_0x3e88e3(0x245),{'id':_0x43a8fb['id']});return _0x5c6403;}}}catch(_0x123237){console[_0x3e88e3(0x215)](_0x3e88e3(0x23b),_0x123237);return;}},groupdb[_0x3a0aea(0x1ff)]=async _0x34af0e=>{const _0x7c3de0=_0x3a0aea;try{if(!global[_0x7c3de0(0x248)])return;if(isMongodb){let _0x136f48=await sck[_0x7c3de0(0x1ff)](_0x34af0e);return _0x136f48;}else return sqldb&&pg?await pg[_0x7c3de0(0x1ff)](_0x7c3de0(0x245),_0x34af0e):await dbs['find'](_0x7c3de0(0x245),_0x34af0e);}catch(_0x1cfef2){return console[_0x7c3de0(0x215)](_0x7c3de0(0x23b),_0x1cfef2),[];}},groupdb['updateOne']=async(_0x41987c,_0x373559={})=>{const _0x27d074=_0x3a0aea;try{if(!global[_0x27d074(0x248)])return;if(!_0x41987c['id'])return{};if(isMongodb)return await sck[_0x27d074(0x222)]({'id':_0x41987c['id']},{..._0x373559});else return sqldb&&pg?await pg[_0x27d074(0x222)](_0x27d074(0x245),{'id':_0x41987c['id']},_0x373559):await dbs[_0x27d074(0x222)]('sck',_0x41987c,_0x373559);}catch(_0x596b5e){return console['log'](_0x27d074(0x1f9),_0x596b5e),{};}},groupdb[_0x3a0aea(0x1f2)]=async _0x87c347=>{const _0x44ff4a=_0x3a0aea;try{if(!global[_0x44ff4a(0x248)])return;if(!_0x87c347['id'])return[];if(isMongodb)return await sck[_0x44ff4a(0x1f2)]({'id':_0x87c347['id']});else return sqldb&&pg?await pg['findOneAndDelete'](_0x44ff4a(0x245),_0x87c347):await dbs[_0x44ff4a(0x1f2)]('sck',_0x87c347);}catch(_0xc37ca6){return console[_0x44ff4a(0x215)](_0x44ff4a(0x231),_0xc37ca6),null;}},groupdb[_0x3a0aea(0x220)]=groupdb[_0x3a0aea(0x1f2)],groupdb[_0x3a0aea(0x22b)]={'drop':async()=>{const _0x14f343=_0x3a0aea;try{if(!global[_0x14f343(0x248)])return;if(isMongodb)return await sck[_0x14f343(0x22b)][_0x14f343(0x229)]();else return sqldb&&pg?await pg[_0x14f343(0x22b)]['drop']('sck'):await dbs[_0x14f343(0x22b)][_0x14f343(0x229)](_0x14f343(0x245));}catch(_0x523825){return console[_0x14f343(0x215)]('Error\x20while\x20collection.drop\x20all\x20user\x20in\x20database,\x0a',_0x523825),null;}}};let userdb={};userdb[_0x3a0aea(0x233)]=async()=>{const _0x23f77c=_0x3a0aea;try{if(!global['SmdOfficial'])return;if(isMongodb)return await sck1['countDocuments']();else return sqldb&&pg?await pg[_0x23f77c(0x233)](_0x23f77c(0x242)):await dbs[_0x23f77c(0x233)](_0x23f77c(0x242));}catch(_0xb4305){return console[_0x23f77c(0x215)](_0x23f77c(0x22a),_0xb4305),0x0;}},userdb[_0x3a0aea(0x235)]=async _0x5f55f4=>{const _0x11ddaa=_0x3a0aea;try{if(!global[_0x11ddaa(0x248)])return;if(isMongodb){let _0x985b9a=await sck1[_0x11ddaa(0x1f0)]({'id':_0x5f55f4['id']})||await new sck1({'id':_0x5f55f4['id'],..._0x5f55f4})[_0x11ddaa(0x232)]();return _0x985b9a;}else{if(sqldb&&pg){var _0xa591b3=await pg[_0x11ddaa(0x1f0)](_0x11ddaa(0x242),{'id':_0x5f55f4['id']})||await pg[_0x11ddaa(0x235)](_0x11ddaa(0x242),_0x5f55f4);return _0xa591b3;}else{var _0xa591b3=await dbs[_0x11ddaa(0x1f0)](_0x11ddaa(0x242),{'id':_0x5f55f4['id']})||await dbs[_0x11ddaa(0x235)](_0x11ddaa(0x242),_0x5f55f4);return _0xa591b3;}}}catch(_0x11a429){return console[_0x11ddaa(0x215)]('Error\x20userdb.new()\x20in\x20user\x20database,\x0a',_0x11a429),{};}},userdb[_0x3a0aea(0x1f0)]=async _0x2450d0=>{const _0x36c45a=_0x3a0aea;try{if(!global[_0x36c45a(0x248)])return;if(isMongodb)return await sck1[_0x36c45a(0x1f0)]({'id':_0x2450d0['id']});else{if(sqldb&&pg)return await pg[_0x36c45a(0x1f0)](_0x36c45a(0x242),_0x2450d0);else{var _0x46cfd1=await dbs[_0x36c45a(0x1f0)](_0x36c45a(0x242),{'id':_0x2450d0['id']});return _0x46cfd1;}}}catch(_0x5a2e19){console[_0x36c45a(0x215)]('Error\x20userdb.findOne()\x20in\x20user\x20database,\x0a',_0x5a2e19);return;}},userdb[_0x3a0aea(0x1ff)]=async _0x5b0712=>{const _0x3896cf=_0x3a0aea;try{if(!global[_0x3896cf(0x248)])return;if(isMongodb){let _0x1e2f9e=await sck1['find'](_0x5b0712);return _0x1e2f9e;}else return sqldb&&pg?await pg['find']('sck1',_0x5b0712):await dbs[_0x3896cf(0x1ff)]('sck1',_0x5b0712);}catch(_0x478a2a){return console[_0x3896cf(0x215)](_0x3896cf(0x24d),_0x478a2a),[];}},userdb[_0x3a0aea(0x222)]=async(_0x234cce,_0x2ecb25={})=>{const _0x2e6bbc=_0x3a0aea;try{if(!global[_0x2e6bbc(0x248)])return;if(!_0x234cce['id'])return{};if(isMongodb)return await sck1[_0x2e6bbc(0x222)]({'id':_0x234cce['id']},{..._0x2ecb25});else return sqldb&&pg?await pg[_0x2e6bbc(0x222)](_0x2e6bbc(0x242),{'id':_0x234cce['id']},_0x2ecb25):await dbs[_0x2e6bbc(0x222)]('sck1',_0x234cce,_0x2ecb25);}catch(_0x5066df){return console[_0x2e6bbc(0x215)](_0x2e6bbc(0x1ec),_0x5066df),{};}},userdb[_0x3a0aea(0x1f2)]=async _0xdeca22=>{const _0x1410c1=_0x3a0aea;try{if(!global['SmdOfficial'])return;if(!_0xdeca22['id'])return[];if(isMongodb)return await sck1[_0x1410c1(0x1f2)]({'id':_0xdeca22['id']});else return sqldb&&pg?await pg['findOneAndDelete'](_0x1410c1(0x242),_0xdeca22):await dbs[_0x1410c1(0x1f2)](_0x1410c1(0x242),_0xdeca22);}catch(_0x46c202){return console[_0x1410c1(0x215)]('Error\x20userdb.findOneAndDelete()\x20in\x20user\x20database,\x0a',_0x46c202),null;}},userdb[_0x3a0aea(0x220)]=userdb['findOneAndDelete'],userdb[_0x3a0aea(0x22b)]={'drop':async()=>{const _0x41cfa5=_0x3a0aea;try{if(!global[_0x41cfa5(0x248)])return;if(isMongodb)return await sck1[_0x41cfa5(0x22b)][_0x41cfa5(0x229)]();else return sqldb&&pg?await pg['collection'][_0x41cfa5(0x229)]('sck1'):await dbs[_0x41cfa5(0x22b)]['drop'](_0x41cfa5(0x242));}catch(_0x2969c3){return console[_0x41cfa5(0x215)](_0x41cfa5(0x1fa),_0x2969c3),null;}}};let alivedb={};alivedb[_0x3a0aea(0x233)]=async()=>{const _0x23b087=_0x3a0aea;try{if(!global[_0x23b087(0x248)])return;if(isMongodb)return await alive[_0x23b087(0x233)]();else return sqldb&&pg?await pg[_0x23b087(0x233)](_0x23b087(0x1fe)):await dbs[_0x23b087(0x233)](_0x23b087(0x1fe));}catch(_0x4081dd){return console[_0x23b087(0x215)](_0x23b087(0x251),_0x4081dd),0x0;}},alivedb['new']=async _0x2bee50=>{const _0x139701=_0x3a0aea;try{if(!global[_0x139701(0x248)])return;if(isMongodb){let _0xd1aa49=await alive[_0x139701(0x1f0)]({'id':_0x2bee50['id']})||await new alive({'id':_0x2bee50['id'],..._0x2bee50})[_0x139701(0x232)]();return _0xd1aa49;}else{if(sqldb&&pg)return await pg['findOne'](_0x139701(0x1fe),{'id':_0x2bee50['id']})||await pg['new'](_0x139701(0x1fe),_0x2bee50);else{var _0x3c13ea=await dbs['findOne']('bot_',{'id':_0x2bee50['id']})||await dbs[_0x139701(0x235)](_0x139701(0x1fe),_0x2bee50);return _0x3c13ea;}}}catch(_0x5111bd){return console[_0x139701(0x215)](_0x139701(0x221),_0x5111bd),{};}},alivedb['findOne']=async _0x443ebe=>{const _0x30d048=_0x3a0aea;try{if(!global[_0x30d048(0x248)])return;if(isMongodb)return await alive[_0x30d048(0x1f0)]({'id':_0x443ebe['id']});else{if(sqldb&&pg)return await pg[_0x30d048(0x1f0)](_0x30d048(0x1fe),_0x443ebe);else{var _0x829297=await dbs[_0x30d048(0x1f0)]('bot_',{'id':_0x443ebe['id']});return _0x829297;}}}catch(_0x3b7a2d){console[_0x30d048(0x215)](_0x30d048(0x23b),_0x3b7a2d);return;}},alivedb[_0x3a0aea(0x1ff)]=async _0x19e70e=>{const _0x5d8859=_0x3a0aea;try{if(!global[_0x5d8859(0x248)])return;if(isMongodb){let _0x2bd607=await alive['find'](_0x19e70e);return _0x2bd607;}else return sqldb&&pg?await pg[_0x5d8859(0x1ff)](_0x5d8859(0x1fe),_0x19e70e):await dbs[_0x5d8859(0x1ff)](_0x5d8859(0x1fe),_0x19e70e);}catch(_0x5d0439){return console[_0x5d8859(0x215)](_0x5d8859(0x23b),_0x5d0439),[];}},alivedb[_0x3a0aea(0x222)]=async(_0x4f101f,_0xd5825b={})=>{const _0x78c9ec=_0x3a0aea;try{if(!global[_0x78c9ec(0x248)])return;if(!_0x4f101f['id'])return{};if(isMongodb)return await alive['updateOne']({'id':_0x4f101f['id']},{..._0xd5825b});else return sqldb&&pg?await pg[_0x78c9ec(0x222)](_0x78c9ec(0x1fe),{'id':_0x4f101f['id']},_0xd5825b):await dbs[_0x78c9ec(0x222)](_0x78c9ec(0x1fe),_0x4f101f,_0xd5825b);}catch(_0x2bdc25){return console['log'](_0x78c9ec(0x1f9),_0x2bdc25),{};}},alivedb['findOneAndDelete']=async _0x660230=>{const _0x141124=_0x3a0aea;try{if(!global['SmdOfficial'])return;if(!_0x660230['id'])return[];if(isMongodb)return await alive[_0x141124(0x1f2)]({'id':_0x660230['id']});else return sqldb&&pg?await pg[_0x141124(0x1f2)](_0x141124(0x1fe),_0x660230):await dbs['findOneAndDelete'](_0x141124(0x1fe),_0x660230);}catch(_0x4492eb){return console[_0x141124(0x215)](_0x141124(0x231),_0x4492eb),null;}},alivedb[_0x3a0aea(0x220)]=alivedb[_0x3a0aea(0x1f2)],alivedb[_0x3a0aea(0x22b)]={'drop':async()=>{const _0x5afd5c=_0x3a0aea;try{if(!global[_0x5afd5c(0x248)])return;if(isMongodb)return await alive[_0x5afd5c(0x22b)]['drop']();else return sqldb&&pg?await pg['collection'][_0x5afd5c(0x229)](_0x5afd5c(0x1fe)):await dbs[_0x5afd5c(0x22b)][_0x5afd5c(0x229)](_0x5afd5c(0x1fe));}catch(_0x4e2fb0){return console[_0x5afd5c(0x215)](_0x5afd5c(0x256),_0x4e2fb0),null;}}};let tempdb={};tempdb[_0x3a0aea(0x233)]=async()=>{const _0x2aa46b=_0x3a0aea;try{if(!global[_0x2aa46b(0x248)])return;if(isMongodb)return await dbtemp[_0x2aa46b(0x233)]();else return sqldb&&pg?await pg[_0x2aa46b(0x233)]('tempdb'):await dbs[_0x2aa46b(0x233)](_0x2aa46b(0x253));}catch(_0x4fc8d8){return console[_0x2aa46b(0x215)](_0x2aa46b(0x251),_0x4fc8d8),0x0;}},tempdb[_0x3a0aea(0x235)]=async _0x526942=>{const _0x17faef=_0x3a0aea;try{if(!global['SmdOfficial'])return;if(isMongodb){let _0x2fd0a9=await dbtemp['findOne']({'id':_0x526942['id']})||await new dbtemp({'id':_0x526942['id'],..._0x526942})[_0x17faef(0x232)]();return _0x2fd0a9;}else{if(sqldb&&pg){var _0x2b0d8b=await pg[_0x17faef(0x1f0)](_0x17faef(0x253),{'id':_0x526942['id']})||await pg[_0x17faef(0x235)](_0x17faef(0x253),_0x526942);return _0x2b0d8b;}else{var _0x2b0d8b=await dbs['findOne'](_0x17faef(0x253),{'id':_0x526942['id']})||await dbs['new'](_0x17faef(0x253),_0x526942);return _0x2b0d8b;}}}catch(_0x389022){return console[_0x17faef(0x215)](_0x17faef(0x251),_0x389022),{};}},tempdb[_0x3a0aea(0x1f0)]=async _0x4058b4=>{const _0x3cc971=_0x3a0aea;try{if(!global[_0x3cc971(0x248)])return;if(isMongodb)return await dbtemp['findOne']({'id':_0x4058b4['id']});else{if(sqldb&&pg)return await pg[_0x3cc971(0x1f0)]('tempdb',_0x4058b4);else{var _0x1711e3=await dbs[_0x3cc971(0x1f0)](_0x3cc971(0x253),{'id':_0x4058b4['id']});return _0x1711e3;}}}catch(_0xda1823){console['log'](_0x3cc971(0x23b),_0xda1823);return;}},tempdb[_0x3a0aea(0x1ff)]=async _0x3f7c16=>{const _0x20feac=_0x3a0aea;try{if(!global['SmdOfficial'])return;if(isMongodb){let _0x143b7e=await dbtemp['find'](_0x3f7c16);return _0x143b7e;}else return sqldb&&pg?await pg[_0x20feac(0x1ff)](_0x20feac(0x253),_0x3f7c16):await dbs[_0x20feac(0x1ff)](_0x20feac(0x253),_0x3f7c16);}catch(_0x5a2fa5){return console[_0x20feac(0x215)](_0x20feac(0x23b),_0x5a2fa5),[];}},tempdb['updateOne']=async(_0x41af4e,_0x92ae4={})=>{const _0x2a61fc=_0x3a0aea;try{if(!global[_0x2a61fc(0x248)])return;if(!_0x41af4e['id'])return{};if(isMongodb)return await dbtemp[_0x2a61fc(0x222)]({'id':_0x41af4e['id']},{..._0x92ae4});else return sqldb&&pg?await pg[_0x2a61fc(0x222)](_0x2a61fc(0x253),{'id':_0x41af4e['id']},_0x92ae4):await dbs[_0x2a61fc(0x222)](_0x2a61fc(0x253),_0x41af4e,_0x92ae4);}catch(_0xc75f88){return console[_0x2a61fc(0x215)](_0x2a61fc(0x1f9),_0xc75f88),{};}},tempdb[_0x3a0aea(0x1f2)]=async _0x339ced=>{const _0x38acc2=_0x3a0aea;try{if(!global['SmdOfficial'])return;if(!_0x339ced['id'])return[];if(isMongodb)return await dbtemp['findOneAndDelete']({'id':_0x339ced['id']});else return sqldb&&pg?await pg[_0x38acc2(0x1f2)](_0x38acc2(0x253),_0x339ced):await dbs['findOneAndDelete']('tempdb',_0x339ced);}catch(_0x55d55b){return console[_0x38acc2(0x215)](_0x38acc2(0x231),_0x55d55b),null;}},tempdb['delete']=tempdb[_0x3a0aea(0x1f2)],tempdb[_0x3a0aea(0x22b)]={'drop':async()=>{const _0x537d3d=_0x3a0aea;try{if(!global[_0x537d3d(0x248)])return;if(isMongodb)return await dbtemp[_0x537d3d(0x22b)][_0x537d3d(0x229)]();else return sqldb&&pg?await pg[_0x537d3d(0x22b)][_0x537d3d(0x229)]('tempdb'):await dbs[_0x537d3d(0x22b)][_0x537d3d(0x229)](_0x537d3d(0x253));}catch(_0x32ad2c){return console[_0x537d3d(0x215)](_0x537d3d(0x256),_0x32ad2c),null;}}},module['exports']={'tempdb':tempdb,'pg':pg,'dbs':dbs,'groupdb':groupdb,'userdb':userdb,'alivedb':alivedb,'bot_':alivedb};