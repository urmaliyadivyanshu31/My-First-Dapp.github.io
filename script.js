 <script 
    charset="utf-8"
    src="https://cdn.ethers.io/scripts/ethers-v4.min.js"
    type="text/javascript">
  </script>
  <script>
    window.ethereum.enable();
    var provider = new ethers.providers.Web3Provider(
      web3.currentProvider,
      "ropsten"
    );
    var MoodContractAddress = "0x5E4ED91B6d11f4a1e5d547F1E0C1276c3c8c3BaA";
    var MoodContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mood",
				"type": "string"
			}
		],
		"name": "setMood",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMood",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
    var MoodContract;
    var signer;
    provider.listAccounts().then(function (accounts) {
      signer = provider.getSigner(accounts[0]);
      MoodContract = new ethers.Contract(
        MoodContractAddress,
        MoodContractABI,
        signer
      );
    });
    async function getMood() {
      getMoodPromise = MoodContract.getMood();
      var Mood = await getMoodPromise;
      console.log(Mood);
    }
    async function setMood() {
      let mood = document.getElementById("mood").value;
      setMoodPromise = MoodContract.setMood(mood);
      await setMoodPromise;
    }

  </script>
