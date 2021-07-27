const express = require('express')
const app = express()
app.set('port', (process.env.PORT || 5000));

const http = require("http");
setInterval(function () {
  http.get("https://unitbossbot.herokuapp.com");
}, 60000);

const Discord = require('discord.js')

const client = new Discord.Client()
  

var Devtime, Bigtime, Okptime, Diltime, Bastime, Biltime, Peitime, Illtime, Fromchecktime, Tochecktime
var Devtimer, Bigtimer, Okptimer, Bastimer, Diltimer, Biltimer, Peitimer, Illtimer, Fromchecktimer, Tochecktimer
var Devtimerr, Bigtimerr, Okptimerr, Bastimerr, Diltimerr, Biltimerr, Peitimerr, Illtimerr
var Devago = 0, Bigago = 0, Okpago = 0, Basago = 0, Dilago = 0, Bilago = 0, Peiago = 0, Illago = 0 , Fcheckago = 0, Tcheckago = 0;
var Dcheck = 1, Bcheck = 1, Ocheck = 1

client.on('ready', () => 
{
	console.log(`Logged in as ${client.user.tag}!`)
	client.user.setActivity('보스타임 계산',{type:'STREAMING'})
})

client.on('message', msg  => 
{
	var Now = new Date()
	Now.setHours(Now.getHours()+9)

	if(msg.content.startsWith('.도움말'))
	{
		return msg.channel.send('```.도움말 : 모든 명령어를 출력합니다.\n'
		+ '.시간 : 현재 시간을 출력합니다.\n'
		+ '.삭제 [숫자] : 숫자만큼의 메세지를 삭제합니다. 일부 권한이 요구됩니다.\n'
		+ '.컷 [이름] [일] [시] [분] [초] : 해당 보스의 젠타임을 계산합니다.\n'
		+ '.점검 [월] [일] [시] [분] [시] [분] : 점검 날짜를 설정합니다.\n'
		+ '.리스트 : 모든 보스의 젠타임과 점검 날짜를 출력합니다.\n'
		+ '.초기화 : 모든 보스의 젠타임과 점검 날짜를 초기화합니다. (에러 발생시 사용)```');
	}

	if (msg.content.startsWith('.시간'))
	{
		return msg.channel.send('```'+Now.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' })+'```')
	}

	if (msg.content.startsWith('.삭제')||msg.content.startsWith('.청소')) 
	{
		if (!msg.member.hasPermission('MANAGE_MESSAGES')) 
		{
			return msg.channel.send('```삭제 권한이 없습니다.```')
		}
		var purge = msg.content.substring(4)
		if (!purge || purge == '') 
		{
			return msg.channel.send('```삭제할 메세지의 개수를 입력해주세요.```')
		}
		purge = parseInt(purge);
		if (purge > 100) 
		{
			return msg.channel.send('```1-100 사이의 숫자를 입력해주세요.```')
		}
		if (purge < 1) 
		{
			return msg.channel.send('```1-100 사이의 숫자를 입력해주세요.```')
		}
		if (isNaN(purge) == true) 
		{
			return msg.channel.send('```숫자만 입력해주세요.```')
		}
		else
		{
			msg.channel.bulkDelete(purge+1)
			.then(() => msg.channel.send('```' + purge + '개의 메세지 삭제 완료.```'))
			.catch(console.error)
		}
		return
	}

	if (msg.content.startsWith('.컷'))
	{
		if (msg.content.split(' ').length != 6)
		{
			return msg.channel.send('```전달 인수가 정확하지 않습니다. 명령어 사용법을 확인해주세요.```')
		}

		for(var i = 2; i < 6 ; i++)
		{
			if(isNaN(parseInt(msg.content.split(' ')[i])) == true)
			{
				return msg.channel.send('```날짜는 숫자만 입력 가능합니다. 명령어 사용법을 확인해주세요.```')
			}
		}

		var Bossname = msg.content.split(' ')[1]
		var date

		switch(Bossname)
		{
			case '데블' : Bossname = 'Dev'
			date = Devtime = (Dcheck) ? setBT(msg, 0,5,43,0) : setBT(msg, 0,5,33,0)
			if(Devtime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			} 
			clearTimeout(Devtimer)
			Devtimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-데블랑 젠타임 30분 전\n\n데블랑 젠타임 : ' + Devtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Devago = 1}, Devtime.getTime()-Now.getTime()-1800000)
			Devtimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 데블랑이 나타났다.```'); Devtime = null; Devago = 0}, Devtime.getTime()-Now.getTime())
			if(Dcheck)
			{
				Dcheck = 0
			}					
			break
			case '데블랑' : Bossname = 'Dev'
			date = Devtime = (Dcheck) ? setBT(msg, 0,5,43,0) : setBT(msg, 0,5,33,0)
			if(Devtime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			} 
			clearTimeout(Devtimer)
			Devtimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-데블랑 젠타임 30분 전\n\n데블랑 젠타임 : ' + Devtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Devago = 1}, Devtime.getTime()-Now.getTime()-1800000)
			Devtimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 데블랑이 나타났다.```'); Devtime = null; Devago = 0}, Devtime.getTime()-Now.getTime())
			if(Dcheck)
			{
				Dcheck = 0
			}					
			break
			case '빅마' : Bossname = 'Big'
			date = Bigtime = (Bcheck) ? setBT(msg, 0,21,10,0) : setBT(msg, 0,20,55,0)
			if(Bigtime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			} 
			clearTimeout(Bigtimer)
			Bigtimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-빅마마 젠타임 30분 전\n\n빅마마 젠타임 : ' + Bigtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Bigago = 1}, Bigtime.getTime()-Now.getTime()-1800000)
			Bigtimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 빅마마가 나타났다.```'); Bigtime = null; Bigago = 0}, Bigtime.getTime()-Now.getTime())
			if(Bcheck)
			{
				Bcheck = 0
			}					
			break;
			case '빅마마' : Bossname = 'Big'
			date = Bigtime =  (Bcheck) ? setBT(msg, 0,21,10,0) : setBT(msg, 0,20,55,0)
			if(Bigtime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			} 
			clearTimeout(Bigtimer)
			Bigtimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-빅마마 젠타임 30분 전\n\n빅마마 젠타임 : ' + Bigtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Bigago = 1}, Bigtime.getTime()-Now.getTime()-1800000)
			Bigtimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 빅마마가 나타났다.```'); Bigtime = null;; Bigago = 0}, Bigtime.getTime()-Now.getTime())
			if(Bcheck)
			{
				Bcheck = 0
			}					
			break
			case '우크' : Bossname = 'Okp'
			date = Okptime = (Ocheck) ? setBT(msg, 0,21,12,0) : setBT(msg, 0,20,57,0)
			if(Okptime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			}
			clearTimeout(Okptimer)
			Okptimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-우크파나 젠타임 30분 전\n\n우크파나 젠타임 : ' + Okptime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Okpago = 1}, Okptime.getTime()-Now.getTime()-1800000)
			Okptimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 우크파나가 나타났다.```'); Okptime = null; Okpago = 0}, Okptime.getTime()-Now.getTime())
			if(Ocheck)
			{
				Ocheck = 0
			}					
			break
			case '우크파나' : Bossname = 'Okp'
			date = Okptime = (Ocheck) ? setBT(msg, 0,21,12,0) : setBT(msg, 0,20,57,0)
			if(Okptime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			}
			clearTimeout(Okptimer)
			Okptimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-우크파나 젠타임 30분 전\n\n우크파나 젠타임 : ' + Okptime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Okpago = 1}, Okptime.getTime()-Now.getTime()-1800000)
			Okptimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 우크파나가 나타났다.```'); Okptime = null; Okpago = 0}, Okptime.getTime()-Now.getTime())
			if(Ocheck)
			{
				Ocheck = 0;
			}					
			break
			case '마녀' : Bossname = 'Dil'
			date = Diltime =  setBT(msg, 2,0,0,0)
			if(Diltime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			 }
			clearTimeout(Diltimer)
			Diltimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-마녀딜린 젠타임 30분 전\n\n마녀딜린 젠타임 : ' + Diltime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Dilago = 1}, Diltime.getTime()-Now.getTime()-1800000)
			Diltimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 마녀딜린이 나타났다.```'); Diltime = null; Dilago = 0}, Diltime.getTime()-Now.getTime())
			break
			case '딜린' : Bossname = 'Dil'
			date = Diltime = setBT(msg, 2,0,0,0)
			if(Diltime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			 }
			clearTimeout(Diltimer)
			Diltimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-마녀딜린 젠타임 30분 전\n\n마녀딜린 젠타임 : ' + Diltime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Dilago = 1}, Diltime.getTime()-Now.getTime()-1800000)
			Diltimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 마녀딜린이 나타났다.```'); Diltime = null; Dilago = 0}, Diltime.getTime()-Now.getTime())
			break			
			case '마녀딜린' : Bossname = 'Dil'
			date = Diltime = setBT(msg, 2,0,0,0)
			if(Diltime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			 }
			clearTimeout(Diltimer)
			Diltimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-마녀딜린 젠타임 30분 전\n\n마녀딜린 젠타임 : ' + Diltime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Dilago = 1}, Diltime.getTime()-Now.getTime()-1800000)
			Diltimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 마녀딜린이 나타났다.```'); Diltime = null; Dilago = 0}, Diltime.getTime()-Now.getTime())
			break			
			case '바슬' : Bossname = 'Bas'
			date = Bastime = setBT(msg, 1,0,0,0)
			if(Bastime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			}
			clearTimeout(Bastimer)
			Bastimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-바슬라프 젠타임 30분 전\n\n바슬라프 젠타임 : ' + Bastime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Basago = 1}, Bastime.getTime()-Now.getTime()-1800000)
			Bastimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 바슬라프가 나타났다.```'); Bastime = null; Basago = 0}, Bastime.getTime()-Now.getTime())
			break
			case '바슬라프' : Bossname = 'Bas'
			date = Bastime = setBT(msg, 1,0,0,0)
			if(Bastime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			}
			clearTimeout(Bastimer)
			Bastimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-바슬라프 젠타임 30분 전\n\n바슬라프 젠타임 : ' + Bastime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Basago = 1}, Bastime.getTime()-Now.getTime()-1800000)
			Bastimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 바슬라프가 나타났다.```'); Bastime = null; Basago = 0}, Bastime.getTime()-Now.getTime())
			break			
			case '빌리' : Bossname = 'Bil'
			date = Biltime = setBT(msg, 0,7,55,0)
			if(Biltime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			}
			clearTimeout(Biltimer)
			Biltimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-빌리어드 젠타임 30분 전\n\n빌리어드 젠타임 : ' + Bastime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Bilago = 1}, Biltime.getTime()-Now.getTime()-1800000)
			Biltimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 빌리어드가 나타났다.```'); Biltime = null; Bilago = 0}, Biltime.getTime()-Now.getTime())
			break
			case '빌리어드' : Bossname = 'Bil'
			date = Biltime = setBT(msg, 0,7,55,0)
			if(Biltime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			}
			clearTimeout(Biltimer)
			Biltimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-빌리어드 젠타임 30분 전\n\n빌리어드 젠타임 : ' + Bastime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Bilago = 1}, Biltime.getTime()-Now.getTime()-1800000)
			Biltimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 빌리어드가 나타났다.```'); Biltime = null; Bilago = 0}, Biltime.getTime()-Now.getTime())
			break			
			case '페이스' : Bossname = 'Pei'
			date = Peitime = setBT(msg, 0,5,50,0)
			if(Peitime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
				} 
			clearTimeout(Peitimer)
			Peitimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-페이쓰 젠타임 30분 전\n\n페이쓰 젠타임 : ' + Peitime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Peiago = 1}, Peitime.getTime()-Now.getTime()-1800000)
			Peitimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 페이쓰가 나타났다.```'); Peitime = null; Peiago = 0}, Peitime.getTime()-Now.getTime())
			break
			case '페이쓰' : Bossname = 'Pei'
			date = Peitime = setBT(msg, 0,5,50,0)
			if(Peitime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			} 
			clearTimeout(Peitimer)
			Peitimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-페이쓰 젠타임 30분 전\n\n페이쓰 젠타임 : ' + Peitime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Peiago = 1}, Peitime.getTime()-Now.getTime()-1800000)
			Peitimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 페이쓰가 나타났다.```'); Peitime = null; Peiago = 0}, Peitime.getTime()-Now.getTime())
			break			
			case '일루' : Bossname = 'Ill'
			date = Illtime = setBT(msg, 2,0,00,0)
			if(Illtime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			} 
			clearTimeout(Illtimer)
			Illtimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-일루스트 젠타임 30분 전\n\n일루스트 젠타임 : ' + Illtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Illago = 1}, Illtime.getTime()-Now.getTime()-1800000)
			Illtimerr = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-야생의 일루트스가 나타났다.```'); Illtime = null; Illago = 0}, Illtime.getTime()-Now.getTime())
			break
			case '일루스트' : Bossname = 'Ill'
			date = Illtime = setBT(msg, 2,0,00,0)
			if(Illtime == null)
			{
				return msg.channel.send('```날짜가 유효하지 않습니다.```')
			} 
			clearTimeout(Illtimer)
			Illtimer = setTimeout(function(){client.channels.cache.get(process.env.channel).send('```diff\n-일루스트 젠타임 30분 전\n\n일루스트 젠타임 : ' + Illtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```'); Illago = 1}, Illtime.getTime()-Now.getTime()-1800000)
			Illtimerr = setTimeout(function(){client.channels.cache.get(process.env
				
				
				
				
				.channel).send('```diff\n-야생의 일루트스가 나타났다.```'); Illtime = null; Illago = 0}, Illtime.getTime()-Now.getTime())
			break
			default : msg.channel.send('```잘못된 보스명입니다.\n\n유효한 보스명 : 데블, 데블랑, 빅마, 빅마마, 우크, 우크파나, 마녀, 딜린, 마녀딜린, 바슬, 바슬라프, 빌리, 빌리어드, 페이스, 페이쓰, 일루, 일루스트```')
		}
		msg.channel.send('```해당 보스의 젠타임이 설정되었습니다\n\n다음 젠타임 : ' + date.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '\n젠타임 30분 전에 알람이 울립니다.```')
		return
	}

	if (msg.content.startsWith('.리스트'))
	{
				var retlist = ''
				if (Fromchecktime == null){retlist+='---점검 시작 : -\n'}
				else if(Fcheckago == 1) {retlist += '-점검 시작 : ' + Fromchecktime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				else {retlist+='점검 시작 : ' + Fromchecktime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				
				if (Tochecktime == null){retlist+='---점검 종료 : -\n\n'}
				else if(Tcheckago == 1) {retlist+='-점검 종료 : ' + Tochecktime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n\n'}
				else {retlist+='점검 종료 : ' + Tochecktime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n\n'}

				if (Devtime == null){retlist+='---데블랑 : -\n'}
				else if (Devago == 1) {retlist+='-데블랑 : ' + Devtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'} 
				else {retlist+='데블랑 : ' + Devtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'} 
				
				if (Bigtime == null){retlist+='---빅마마 : -\n'}
				else if (Bigago == 1) {retlist+='-빅마마 : ' + Bigtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				else {retlist+='빅마마 : ' + Bigtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				
				if (Okptime == null){retlist+='---우크파나 : -\n'}
				else if (Okpago == 1) {retlist+='-우크파나 : ' + Okptime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				else {retlist+='우크파나 : ' + Okptime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				
				if (Diltime == null){retlist+='---마녀딜린 : -\n'}
				else if (Dilago == 1) {retlist+='-마녀딜린 : ' + Diltime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				else {retlist+='마녀딜린 : ' + Diltime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				
				if (Bastime == null){retlist+='---바슬라프 : -\n'}
				else if (Basago == 1) {retlist+='-바슬라프 : ' + Bastime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				else {retlist+='바슬라프 : ' + Bastime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				
				if (Biltime == null){retlist+='---빌리어드 : -\n'}
				else if (Bilago == 1) {retlist+='-빌리어드 : ' + Biltime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				else {retlist+='빌리어드 : ' + Biltime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				
				if (Peitime == null){retlist+='---페이쓰 : -\n'}
				else if (Peiago == 1) {retlist+='-페이쓰 : ' + Peitime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				else {retlist+='페이쓰 : ' + Peitime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				
				if (Illtime == null){retlist+='---일루스트 : -\n'}
				else if (Illago == 1) {retlist+='-일루스트 : ' + Illtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				else {retlist+='일루스트 : ' + Illtime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) +'\n'}
				
				return msg.channel.send('```diff\n' +retlist+'```')
	}

	if(msg.content.startsWith('.초기화'))
	{
		if (msg.content.split(' ').length == 1)
		{
			clearTimeout(Devtimer)
			clearTimeout(Bigtimer)
			clearTimeout(Okptimer)
			clearTimeout(Diltimer)
			clearTimeout(Bastimer)
			clearTimeout(Biltimer)
			clearTimeout(Peitimer)
			clearTimeout(Illtimer)
			clearTimeout(Devtimerr)
			clearTimeout(Bigtimerr)
			clearTimeout(Okptimerr)
			clearTimeout(Diltimerr)
			clearTimeout(Bastimerr)
			clearTimeout(Biltimerr)
			clearTimeout(Peitimerr)
			clearTimeout(Illtimerr)
			clearTimeout(Fromchecktimer)
			clearTimeout(Tochecktimer)
			Devtime = null, Bigtime = null, Okptime = null, Diltime = null, Bastime = null, Biltime = null, Peitime = null, Illtime = null, Fromchecktime = null, Tochecktime = null
			Dcheck = 1, Bcheck = 1, Ocheck = 1, Devago = 0, Bigago = 0, Okpago = 0, Dilago = 0, Basago = 0, Bilago = 0, Peiago = 0, Illago = 0 , Fcheckago = 0, Tcheckago = 0
			return msg.channel.send("```\n모든 보스 초기화 완료```")
		}
		switch(msg.content.split(' ')[1])
		{
			case '데블' : clearTimeout(Devtimer); clearTimeout(Devtimerr); Dcheck = 1; Devago = 0; Devtime = null; break
			case '데블랑' : clearTimeout(Devtimer); clearTimeout(Devtimerr); Dcheck = 1; Devago = 0; Devtime = null; break
			case '빅마' : clearTimeout(Bigtimer); clearTimeout(Bigtimerr); Bcheck = 1; Bigago = 0; Bigtime = null; break
			case '빅마마' : clearTimeout(Bigtimer); clearTimeout(Bigtimerr); Bcheck = 1; Bigago = 0; Bigtime = null; break
			case '우크' : clearTimeout(Okptimer); clearTimeout(Okptimerr); Ocheck = 1; Okpago = 0; Okptime = null; break
			case '우크파나' : clearTimeout(Okptimer); clearTimeout(Okptimerr); Ocheck = 1; Okpago = 0; Okptime = null; break
			case '마녀' : clearTimeout(Diltimer); clearTimeout(Diltimerr); Dilago = 0; Diltime = null; break
			case '딜린' : clearTimeout(Diltimer); clearTimeout(Diltimerr); Dilago = 0; Diltime = null; break
			case '마녀딜린' : clearTimeout(Diltimer); clearTimeout(Diltimerr); Dilago = 0; Diltime = null; break
			case '바슬' : clearTimeout(Bastimer); clearTimeout(Bastimerr); Basago = 0; Bastime = null; break
			case '바슬라프' : clearTimeout(Bastimer); clearTimeout(Bastimerr); Basago = 0; Bastime = null; break
			case '빌리' : clearTimeout(Biltimer); clearTimeout(Biltimerr); Bilago = 0; Biltime = null; break
			case '빌리어드' : clearTimeout(Biltimer); clearTimeout(Biltimerr); Bilago = 0; Biltime = null; break
			case '페이스' : clearTimeout(Peitimer); clearTimeout(Peitimerr); Peiago = 0; Peitime = null; break
			case '페이쓰' : clearTimeout(Peitimer); clearTimeout(Peitimerr); Peiago = 0; Peitime = null; break
			case '일루' : clearTimeout(Illtimer); clearTimeout(Illtimerr); Illago = 0; Illtime = null; break
			case '일루스트' : clearTimeout(Illtimer); clearTimeout(Illtimerr); Illago = 0; Illtime = null; break
			case '점검' : clearTimeout(Fromchecktimer); clearTimeout(Tochecktimer); Fcheckago = 0; Tcheckago = 0; Fromchecktime = null; Tochecktime = null; break
			default: msg.channel.send('```잘못된 보스명입니다.\n\n유효한 보스명 : 데블, 데블랑, 빅마, 빅마마, 우크, 우크파나, 마녀, 딜린, 마녀딜린, 바슬, 바슬라프, 빌리, 빌리어드, 페이스, 페이쓰, 일루, 일루스트, 점검```')
		}
		return msg.channel.send('```해당 보스 초기화 완료```')
	}

	if(msg.content.startsWith('.점검'))
	{
		if(msg.content.split(' ').length != 7)
		{
			return msg.channel.send('```전달 인수가 정확하지 않습니다. 명령어 사용법을 확인해주세요.```')
		}	 

		for(var i = 1; i < 7 ; i++)
		{
			if(isNaN(parseInt(msg.content.split(' ')[i])) == true)
			{
				return msg.channel.send('```날짜는 숫자만 입력 가능합니다. 명령어 사용법을 확인해주세요.```')
			}
		}

		var year = Now.getFullYear()
		var mon = parseInt(msg.content.split(' ')[1])-1 
		var date = parseInt(msg.content.split(' ')[2]) 
		var fromhour = parseInt(msg.content.split(' ')[3]) 
		var frommin = parseInt(msg.content.split(' ')[4]) 
		var tohour = parseInt(msg.content.split(' ')[5]) 
		var tomin = parseInt(msg.content.split(' ')[6]) 

		Fromchecktime = new Date(year, mon, date, fromhour, frommin, 0, 0 )
		Tochecktime = new Date(year, mon, date, tohour, tomin, 0 ,0)

		if (Tochecktime.getTime() < Now.getTime() || Tochecktime.getTime() < Fromchecktime.getTime() || Fromchecktime == null || Tochecktime == null)
		{
			Fromchecktime = null, Tochecktime = null
			return	msg.channel.send('```해당 날짜는 유효하지 않습니다.```')

		}

		msg.channel.send('```점검 날짜 입력 완료\n\n점검 시작 : ' + Fromchecktime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '\n점검 종료 : ' + Tochecktime.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }) + '```')

		clearTimeout(Fromchecktimer)
		clearTimeout(Tochecktimer)

		setTimeout(function(){msg.channel.send('```점검 시작```'); Fcheckago = Tcheckago = 1}, Fromchecktime.getTime()-Now.getTime())
		setTimeout
			(
				function()
				{
					msg.channel.send('```점검 종료```'); 
					Bcheck = Dcheck = Ocheck =1
					Fcheckago = Tcheckago = 0
					Devtime = null, Bigtime = null, Okptime = null, Diltime = null, Bastime = null, Biltime = null, Peitime = null, Illtime = null, Fromchecktime = null, Tochecktime = null
				}, 
				Tochecktime.getTime()-Now.getTime()
			)
			return
	}
})

function setBT(msg, date, hour, min, sec)
{
	var retdate

	var data_year = Now.getFullYear()
	var data_mon = Now.getMonth()
	var data_date = parseInt(msg.content.split(' ')[2]) + date
	var data_hour = parseInt(msg.content.split(' ')[3]) + hour
	var data_min = parseInt(msg.content.split(' ')[4]) + min
	var data_sec = parseInt(msg.content.split(' ')[5]) + sec

	retdate = new Date(data_year, data_mon, data_date, data_hour, data_min, data_sec, 0)
	if (retdate.getTime() < Now.getTime())
	{
		retdate = null
	}
	return retdate
}

client.login(process.env.token)
