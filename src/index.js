/**
 * 入口
 * @author liqingsong<957698457@qq.com>
 * @weburl http://www.liqingsong.cc 
 *         http://www.wyxgn.com
 */
import dva from 'dva';
//import { createBrowserHistory as createHistory } from 'history';
import './global.less';

// 1. Initialize
const app = dva({
    //history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
