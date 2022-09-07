import { Amplify, DataStore, Hub, AuthModeStrategyType } from 'aws-amplify';
import awsmobile from '../aws-exports';

export default async function startAmplifyConfig() {
	Amplify.configure({ 
        ...awsmobile,
        ssr: true,
        DataStore: {
            authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
        },
        oauth: {
            domain: "next-amplify.auth.ap-southeast-2.amazoncognito.com",
            scope: ["email", "openid", "aws.cognito.signin.user.admin", "profile"],
            redirectSignIn: "http://localhost:3000/",
            redirectSignOut: "http://localhost:3000/",
            responseType: "code"
        }
    });
    console.log("config set")
	await DataStore.start();
    console.log("started")
	await waitForDataStoreLoad();
}

const waitForDataStoreLoad = async () => {
	await new Promise<void>((resolve) => {
		Hub.listen('datastore', async (hubData) => {
			const { event } = hubData.payload;
			if (event === 'ready') {
				resolve();
			}
		});
	});
};