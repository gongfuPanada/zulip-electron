		window.onload = function getURL() {

		    var shell = require('electron').shell;
		    var JsonDB = require('node-json-db');
		    var db = new JsonDB("domain", true, true);
		    var data = db.getData("/");

		    if (data["domain"] !== undefined) {
		        window.location.href = 'https://' + data["domain"];
		    } else {
		        var dialogs = require('dialogs')()
		        dialogs.prompt('Enter the URL for your Zulip server', function(ok) {
		            db.push("/domain", ok);
		            console.log(db);
		            window.location.href = 'https://' + ok;
		        })
		    }

		var addPlaceHolder = document.getElementsByTagName('input')[0];
		addPlaceHolder.setAttribute('placeholder', 'zulip.example.com');
		}