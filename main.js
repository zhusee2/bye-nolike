if(typeof(pid)== "number"){ajaxget('forum.php?mod=viewthread&show=true&tid=' + tid + '&viewpid=' + pid, 'post_' + pid);}
location.replace(document.URL+'&show=true');