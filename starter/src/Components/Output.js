/* eslint-disable no-unused-vars */
import * as BookAPI from '../BooksAPI';

const Output = (argone, argtwo, argthree, argfour) =>{
    

    if(argone ==='search'){
        if(argthree !== ''){
            const SearchResult = async () =>{
                const data = await BookAPI.search(argthree);
                return data;
            }
            SearchResult()
                .then(res => {argtwo([...res]);})
                    .catch(() => {
                        argtwo("No results");
                        });
        }

        if(argtwo === ''){
            argone([]);
        }
    }

    
    
    if(argone ==='update'){
        const UpdataResult = async () =>{
            const update = await BookAPI.update(argtwo, argthree);
            return update;
        }
        UpdataResult()
                .catch((err) => {
                    console.groupCollapsed('Update error')
                    console.group(err)
                    console.group('%c Error occured when fetching books when update',
                    'background-color:black; font-size:20px;color:red;');
                    console.groupEnd('Update error')});
    }
    
    if(argone === 'getall'){
        const SearchResult = async () =>{
            const data = await BookAPI.getAll();
            return data;
        }
        SearchResult()
            .then(res => {argtwo(res)})
                .catch((err) => {
                    console.groupCollapsed('Update error')
                    console.group(err)
                    console.group('%c Error occured when fetching books when update',
                    'background-color:black; font-size:20px;color:red;');
                    console.groupEnd('Update error')});
    }

    if(argone === 'get'){
        const SearchResult = async () =>{
            const data = await BookAPI.get(argtwo);
            return data;
        }
        SearchResult()
            .then(res => {console.log(res);})
                .catch(() => {
                    console.log('%c Error occured when fetching books when getAll',
                    'background-color:black; font-size:20px;color:red;');
        });
    }

}
export default Output;







