import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme'
import PostsGrid from './index';
import PostGridItem from '../PostGridItem';
import Loading from '../common/Loading';
import Error from '../common/Error';

const dataStr = `{"bcdc3a88-b6cf-4b55-99bd-bf7818032ae2":{"id":"bcdc3a88-b6cf-4b55-99bd-bf7818032ae2","type":"IMAGES","description":"DESCRIPTIOG cillum anim Lorem laborum quis sit aliqua ad occaecat cillum","impacter_id":"822d919d-0076-4d7d-a7ca-c5404a025614","data":{"media":[{"width":5600,"height":3700,"description":"Alejandro","image":"https://picsum.photos/id/0/5516/3700","version":"2020-03-14"}]}},"ce80fa61-89de-4f2e-a2d8-f280bc0573aa":{"id":"ce80fa61-89de-4f2e-a2d8-f280bc0573aa","type":"IMAGES","description":"sint eu nulla fugiat ut in veniam nostrud labore anim","impacter_id":"822d919d-0076-4d7d-a7ca-c5404a025614","data":{"media":[{"width":5616,"height":3744,"description":"Alejandro Escamilla","image":"https://picsum.photos/id/1/5616/3744","version":"2019-03-14"}]}},"0fde87b5-c70c-434a-a6da-90ca149b4e01":{"id":"0fde87b5-c70c-434a-a6da-90ca149b4e01","type":"IMAGES","description":"non in amet id laboris anim et aliquip aliquip ipsum","impacter_id":"822d919d-0076-4d7d-a7ca-c5404a025614","data":{"media":[{"width":2500,"height":1656,"description":"Tina Rataj","image":"https://picsum.photos/id/100/2500/1656","version":"2019-03-14"}]}}}`;


describe('PostGrid', () => {

  const props = {
    posts: JSON.parse(dataStr),
    loading: false,
    error: '',
    onEdit: jest.fn(),
    onRemove: jest.fn(),
  };

  test('should match snapshot', () => {
    const wrapper = renderer.create(<PostsGrid {...props} />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render loading', () => {
    const wrapper = mount(<PostsGrid {...props} loading={true} />);
    const loading = wrapper.find(Loading);
    expect(loading.exists()).toEqual(true);
  });

  it('should render error', () => {
    const wrapper = mount(<PostsGrid {...props} error={'Some error'} />);
    const error = wrapper.find(Error);
    expect(error.exists()).toEqual(true);
    expect(error.text()).toEqual('Some error');
  });

  it('should render posts', () => {
    const wrapper = mount(<PostsGrid {...props} />);
    const postItem = wrapper.find(PostGridItem);
    expect(postItem.exists()).toEqual(true);
    expect(postItem.length).toEqual(3);
  });

});


