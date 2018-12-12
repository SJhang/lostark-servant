import API from '../constants/routes';
import EVENTS_RESPONSE from '../../public/mock/events.mock.json';

export const mockAPICall = (url: string, isError: boolean) => (
  new Promise((resolve: any, reject: any) => (
    isError ?
      setTimeout(() => reject(), 500) :
      setTimeout(resolve, 500)
  ))
);

export const getRequest = (url: string) =>
  mockAPICall(url).then(() => {
    const response: Object = { data: null };
    switch (url) {
      case API.EVENTS:
        response.data = EVENTS_RESPONSE;
        return response;
      default:
        return { "error": "failed to get Request" };
    }
  });