const https = require('https');
const data = JSON.stringify([{
	"operationName": "getVisitorReviews",
	"variables":{
		"input":{
			"businessId":"36547222",
			"businessType":"restaurant",
			"item":"0",
			"bookingBusinessId":null,
			"page":2,
			"display":10,
			"isPhotoUsed":false,
			"theme":"allTypes",
			"includeContent":true,
			"getAuthorInfo":true
		},
		"id":"36547222"
	},
	"query":"query getVisitorReviews($input: VisitorReviewsInput) {  visitorReviews(input: $input) {"+"\n"+"    items {"+"\n"+"      id"+"\n"+"      rating"+"\n"+"      author {"+"\n"+"        id"+"\n"+"        nickname"+"\n"+"        from"+"\n"+"        imageUrl"+"\n"+"        objectId"+"\n"+"        url"+"\n"+"        review {"+"\n"+"          totalCount"+"\n"+"          imageCount"+"\n"+"          avgRating"+"\n"+"          __typename"+"\n"+"        }"+"\n"+"        __typename"+"\n"+"      }"+"\n"+"      body"+"\n"+"      thumbnail"+"\n"+"      media {"+"\n"+"        type"+"\n"+"        thumbnail"+"\n"+"        __typename"+"\n"+"      }"+"\n"+"      tags"+"\n"+"      status"+"\n"+"      visitCount"+"\n"+"      viewCount"+"\n"+"      visited"+"\n"+"      created"+"\n"+"      reply {"+"\n"+"        editUrl"+"\n"+"        body"+"\n"+"        editedBy"+"\n"+"        created"+"\n"+"        replyTitle"+"\n"+"        __typename"+"\n"+"      }"+"\n"+"      originType"+"\n"+"      item {"+"\n"+"        name"+"\n"+"        code"+"\n"+"        options"+"\n"+"        __typename"+"\n"+"      }"+"\n"+"      language"+"\n"+"      highlightOffsets"+"\n"+"      translatedText"+"\n"+"      businessName"+"\n"+"      showBookingItemName"+"\n"+"      showBookingItemOptions"+"\n"+"      bookingItemName"+"\n"+"      bookingItemOptions"+"\n"+"      __typename"+"\n"+"    }"+"\n"+"    starDistribution {"+"\n"+"      score"+"\n"+"      count"+"\n"+"      __typename"+"\n"+"    }"+"\n"+"    hideProductSelectBox"+"\n"+"    total"+"\n"+"    __typename"+"\n"+"  }"+"\n"+"}\n"
}]);

const options = {
	hostnaem: 'https://api.place.naver.com',
	port:'4989',
	path: '/graphql',
	method:'POST',
	headers: {
		'content-type': 'application/json',
		'content-length': data.length,
		//'cookie': 'NNB=LCKQOCEMDY3F6; NDARK=Y; ASID=d3d9e2ea000001742b252a9400000051; NRTK=ag#20s_gr#0_ma#2_si#0_en#-2_sp#-2; NaverSuggestUse=use%26unuse; m_loc=4962aef25638012a143f88692a0945ee8c85b000bd1b47dbc7686718384c7dd8034c290ced85fb38f2fe2fd0a39b9847; _ga=GA1.2.1462803269.1597895660; _ga_7VKFYR6RV1=GS1.1.1615531740.8.1.1615532729.60; nx_ssl=2; nid_inf=1483566485; NID_AUT=EB5omXpi3gUm3IIo9tnoxEEtj22VmVRCGq40y5/0QDTFb1EoAJetIX9WkmeEnX3i; NID_JKL=Z01VI6BjINZxnjtCog3taiVsbzfXKo+NnUym2CigNu0=; NV_WETR_LAST_ACCESS_RGN_M="MDkzODAxMDU="; NV_WETR_LOCATION_RGN_M="MDkzODAxMDU="; page_uid=h5lbKlprvTossj1ruKGssssstvZ-122496; NID_SES=AAABqnBZOr60bZFLOJmSEq6YFXPF0D0E/OPq++OxGXkAqhWU2OuUwnZYzMixnBJumKdW9pkKPV1hGqYtnRVWfvH56aDv4RcgnqG7gVFptXLdOjS66PLik3pVOE15463RfT8eij0i0Lj9hksyEf539ipjTvqIe62nYBqLRd37IuuNz/eSw4NfQHxAjc9CVAyUmKy3c0fZOeP4OJ+zfm8lTAUJL5Bs3gbr07P9sOKr/cLLZr9+XnBPL4ViSoZKvNACvEC8uKw2dDt9fvuRm558llxe4X+5lFfK+p/3F73SbdnCFI06TkBQSmtIq/Q+7ofbkJ0mbFeevOzFY2C5PdrzWUBGE80TVcmhnxqgdK6f56saJNthHVxyYhadpI7e/jT9Wts+ucoDTo1XmFLA1+C0Lkf2SMeVDKHhHiHamRixBpxRE4wLVHNYTd6eGYRTBpfO6qiDKcIc8s1OptbMg68xyWprDcDzIyrCq0dsNgXwT20EGOe9aEYVRP+rGKRT/8JAVjSoDVP+3C9YDYdcV7mDjo2F6Du11x2qxFwOj1jxSxFK6xbsssWWPyQe9cVUjxVtgb9gpA==; BMR=s=1620607635939&r=https%3A%2F%2Fm.blog.naver.com%2FPostView.nhn%3FblogId%3Dsssy0411%26logNo%3D221563534238%26proxyReferer%3Dhttps%3A%252F%252Fwww.google.com%252F&r2=https%3A%2F%2Fwww.google.com%2F',
		//'referer': 'https://m.place.naver.com/restaurant/36547222/review/visitor?reviewItem=0&theme=allTypes&isPhotoUsed=false&order=NaN'
	}
}

const req = https.request(options, res => {
	console.log('statusCode: ${res.statusCode}')
	res.on('data', d=> {
		process.stdout.write(d)
	})
});

req.on('error', error=>{
	console.error(error)
})

req.write(data);
req.end();