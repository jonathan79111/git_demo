module.exports = function(grunt) {

    // 專案設定
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
    //   banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    //   '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    //   '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    //   '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    //   ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    watch:{
        build:{
            files:['/src/*.js','/css/*.css'],
            tasks:['concat','cssmin','uglify','browserSync','cssmin','ts'],
            options:{spawn:false}
        },
        desktop: {
            files: ['scripts/lib/Util.ts', '/index.html'],
            tasks: ['ts:desktop']
          },
          mobile: {
            files: ['src/main.ts', '/index.html'],
            tasks: ['ts:mobile']
          }
        /* 监控文件变化并执行相应任务 */
        // img: {
        //     files: ['img/*.{png,jpg,jpeg}'],
        //     options: {
        //         livereload: true
        //     }
        // },
        // css: {
        //     options: {
        //         event: ['changed', 'added'],
        //         livereload: true
        //     },
        //     files: ['css/*.css']
        // },
        // js: {
        //     options: {
        //         livereload: true
        //     },
        //     files: ['js/*.js']
        // },
        // html: {
        //     options: {
        //         livereload: true
        //     },
        //     files: ['html/*.html']
        // }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : '/index.html'
            },
            //browserSync監聽watchTask
            options: {
                watchTask: true,
                port: 3000,
                server: './'
            }
        },
        // index:{
        //     bsFiles: {
        //         src:  '/index.html'
        //       },
        //       options: {
        //         watchTask: true,
        //         port: 3000,
        //         server: './'
        //       }
        // }
    },
    ts: {
        desktop: {
            src: ['src/main.ts'],
            out: 'build/js/main.js'
          },
        mobile: {
            src: ['src/layout.ts'],
            out: 'build/js/layout.js'
          },
      },
    concat:{
        options:{
            //文件内容的分隔符
            separator: ';',
            stripBanners: true,
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        // concatAll: {
        //     src: ['src/layout.ts', 'src/main.ts'],
        //     dest: 'build/js/comman.ts'
        // },
        // css:{
        //     src: ['css/*.css'],
        //     dest: 'build/css/common.css'0
        // },
        exportModuleDsktop: {
            src: ['build/js/layout.js', 'build/js/main.js'],
            dest: 'build/js/comman.js'
        },
        // js:{
        //     src: ['src/*.js'],
        //     dest: 'build/js/bundle.js'
        // }
    },
    uglify:{
        options:{
            sourceMap: false,
            stripBanners: true,
            //压缩后的文件注释信息
            banner :'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            footer:'\n/*!修改于<%= grunt.template.today("yyyy-mm-dd") %>  */'
        },
        desktop: {
            options: {
              // banner: "/*\n    " +  git_version + "\n    GuoShi Partners Co., Ltd. All Rights Reserved. */\n",
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
              compress: {
                drop_console: true
              }
            },
            files: {
              'build/js/comman.min.js': ['build/js/comman.js']
            }
          },
          mobile: {
            options: {
              // banner: "/*\n    " +  git_version + "\n    GuoShi Partners Co., Ltd. All Rights Reserved. */\n",
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
              compress: {
                drop_console: true
              }
            }
        },
        //     files: {
        //       'build/layout.min.js': ['build/layout.js']
        //     }
        //   }
        // combine: {
        //     files: {
        //         'build/js/compress-<%= pkg.name %>-<%= pkg.version %>.min.js': ['js/*.js'],
        //         // 'build/js/compress.common.min.js': ['dev/static/js/*/*.common.js']
        //         compress:{
        //             options:{
        //                 report:"min",
        //                 sourceMap: false,
        //                 stripBanners: true,
        //                 //压缩后的文件注释信息
        //                 banner :'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        //                 footer:'\n/*!修改于<%= grunt.template.today("yyyy-mm-dd") %>  */'
        //             }
        //     }
        // },
        // // compress:{
        // //     options:{
        // //         report:"min",
        // //         sourceMap: false,
        // //         stripBanners: true,
        // //         //压缩后的文件注释信息
        // //         banner :'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        // //         footer:'\n/*!修改于<%= grunt.template.today("yyyy-mm-dd") %>  */'
        // //     },
        //     files:[
        //         {
        //             expand:true,
        //             cwd:'dev/static/js',
        //             src:['*.js','!*.min.js','!*.js'],
        //             dest:'build/js',
        //             ext:'.min.js'
        //         }
        //     ]
        // }
    },
    cssmin: {
        combine: {
            files: {
                'build/css/common.min.css': ['css/*.css'],
                // 'build/css/compressByFile.min.css': ['css/*/*.css'],
                // 'build/css/compressAll.min.css': ['css/**/*.css']
            }
        },
        compress: {
            options: {
                report: 'gzip',
                separator: '',
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //美化代码
                beautify: {
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                },
                keepSpecialComments: 0 /* 删除所有注释 */
            },
            files: [
                {
                    expand: true,
                    //相对路径
                    cwd: 'css/',
                    src:['*.css','!*.css'],
                    dest: 'build/css',
                    ext:'.min.css'
                }
            ]
        }
    }
});

    // 載入可以提供 uglify task 的 plugin
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-ts");
    // 預設的 task
    // grunt.registerTask('default',['concat','uglify','cssmin','ts:desktop','browserSync','watch']);
  //  grunt.registerTask('default',['concat','uglify','cssmin','watch']);
//   grunt.registerTask('default', ['browserSync','watch','concat','uglify','cssmin','ts']);//可以啟動browser重整成功
  grunt.registerTask('default', ['browserSync','concat','uglify','cssmin','ts','watch']);//browser會啟動,但重整後失敗
  grunt.registerTask('desktop', ['uglify:desktop','uglify:desktop','concat:exportModuleDsktop']);
  grunt.registerTask('mobile', ['ts:mobile'],['uglify:mobile']);
  };