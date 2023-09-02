import { useEffect, useState } from 'react';

export interface FetchResponse {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  string;
}

export interface Location {
  name: string;
  url:  string;
}


interface FetchState {
  data: FetchResponse | null | boolean;
  isLoading: boolean;
  hasError: string | null;
}

export const useFetch = (url: string) => {
  const [state, setState] = useState<FetchState>({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      setState({
        ...state,
        hasError: `${error}`
      })
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

