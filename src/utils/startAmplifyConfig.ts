import { Amplify, DataStore, Hub, AuthModeStrategyType, syncExpression } from 'aws-amplify';
import awsmobile from '../aws-exports';
import { ChatroomUser, ClientUser, User } from '../models';
import getAuthToken from './getAuthToken';

let busy = false

export default async function startAmplifyConfig() {
	if (busy) {
        return false
    }
    busy = true
    Amplify.configure({ 
        ...awsmobile,
        ssr: true,
        /*oauth: {
            domain: "next-amplify.auth.ap-southeast-2.amazoncognito.com",
            scope: ["email", "openid", "aws.cognito.signin.user.admin", "profile"],
            redirectSignIn: "http://localhost:3000/",
            redirectSignOut: "http://localhost:3000/",
            responseType: "code"
        }*/
    });
    DataStore.configure({
        authProviders: {
            functionAuthProvider: async () => {
                const authToken = getAuthToken(); // refreshAuthToken 
                
                return {
                token: authToken
                }
            }
        },
        syncExpressions: [
            syncExpression(User, () => {
                let authToken = getAuthToken()
                return u => u?.authId('eq', authToken)
            }),
            syncExpression(ChatroomUser, () => {
                let authToken = getAuthToken()
                return u => u?.authId('eq', authToken)
            }),
            syncExpression(ClientUser, () => {
                let authToken = getAuthToken()
                return u => u?.authId('eq', authToken)
            })
        ]
    });
    console.log("config set")
	await DataStore.start();
    console.log("started")
	await waitForDataStoreLoad();
    busy = false
    return true
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