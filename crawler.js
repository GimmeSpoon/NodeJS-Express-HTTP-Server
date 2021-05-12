const https = require('https');
const data = JSON.stringify(
	'caller'='pcweb',
	'query'='%EC%97%B0%EB%82%A8%EB%8F%99%20%EB%A7%9B%EC%A7%91',
	'type'='all',
	//'searchCoord'=126.91617608070375;37.5613931180088,
	'page'=1
	'displayCount'=20,
	'isPlaceRecommendationReplace='true,
	'lang'=ko
);

const options = {
	hostname: 'map.naver.com',
	port:'443',
	path:'/v5/api/search?caller=pcweb&query=%EC%97%B0%EB%82%A8%EB%8F%99%20%EB%A7%9B%EC%A7%91displayCount=20&isPlaceRecommendationReplace=true&lang=ko',
	method:'GET',
	headers: {
		'Content-Type:application/json'
	}

}

const req = https.request(options, res => {
	console.log(`statusCode: ${res.statusCode}`)
	res.on('data', d=> {
		process.stdout.write(d)
	})
});

req.on('error', error=>{
	console.error(error)
})

req.write(data);
req.end();