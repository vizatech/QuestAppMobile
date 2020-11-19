class NetHandler {

	constructor() {
		const queryString = window.location.search;
		if (!queryString || queryString.length == 0) {
			return;
		}
		
		const urlParams = new URLSearchParams(queryString);
		if (urlParams.has("uid")) {
			this.uid = urlParams.get("uid");
		}
		if (urlParams.has("chatid")) {
			this.chatid = urlParams.get("chatid");
		}
		if (urlParams.has("msgid")) {
			this.msgid = urlParams.get("msgid");
		}
		if (urlParams.has("iid")) {
			this.iid = urlParams.get("iid");
		}
	}
	
    time(t) {
		if (this.uid) {
			var data = {};
			if (this.iid)
			{
				data = { uid: this.uid, score: t, iid: this.iid };
				
			}
			else if (this.chatid && this.msgid)
			{
				data = {uid: this.uid, score: t, chatid: this.chatid, msgid: this.msgid };
			}
			
			if (t*t != this.tg) { return; }
			
			fetch("https://europe-west3-freegengame.cloudfunctions.net/freegengamebot", {
    			method: "POST",
    			body: JSON.stringify(data)
  			});
		}
    };
}

netHandler = new NetHandler();
