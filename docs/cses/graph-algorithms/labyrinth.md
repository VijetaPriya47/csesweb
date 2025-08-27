```C++
struct Node{int r,c;};
const int INF = 1e9;
const int dr[4]={1,0,-1,0};
const int dc[4]={0,1,0,-1};
const char Ltr[4]={'D','R','U','L'};     // forward letters

string bfs(int sr,int sc,vector<string>& g){
    int n=g.size(), m=g[0].size();
    vector<vector<int>> dist(n,vector<int>(m,INF));
    vector<vector<int>> par(n,vector<int>(m,-1));

    queue<Node> q;
    dist[sr][sc]=0; q.push({sr,sc});

    while(!q.empty()){
        auto [r,c]=q.front(); q.pop();
        if(g[r][c]=='B') break;
        for(int k=0;k<4;k++){
            int nr=r+dr[k], nc=c+dc[k];
            if(0<=nr&&nr<n&&0<=nc&&nc<m&&(g[nr][nc]=='.'||g[nr][nc]=='B')&&dist[nr][nc]==INF){
                dist[nr][nc]=dist[r][c]+1;
                par[nr][nc]=k;            // store direction index
                q.push({nr,nc});
            }
        }
    }
    if(dist[?][?]==INF) return "";        // target not reached

    /* reconstruct */
    string path; int r=?,c=?;             // target coords
    while(!(r==sr&&c==sc)){
        int k=par[r][c];
        path.push_back(Ltr[k]);
        r-=dr[k]; c-=dc[k];
    }
    reverse(path.begin(),path.end());
    return path;
}
```
