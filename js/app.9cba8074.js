(function(){"use strict";var t={415:function(t,e,n){var o=n(963),r=n(252);function a(t,e,n,o,a,s){const l=(0,r.up)("NavBar"),i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{routeMode:s.checkForRoutes},null,8,["routeMode"]),(0,r.Wm)(i)],64)}const s={class:"navbar"},l=(0,r.Uk)("Go back");function i(t,e,n,o,a,i){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",s,[n.routeMode?((0,r.wg)(),(0,r.j4)(c,{key:0,class:"option",to:"/menu"},{default:(0,r.w5)((()=>[l])),_:1})):(0,r.kq)("",!0)])}var c={name:"NavBar",props:{routeMode:Boolean}},u=n(744);const d=(0,u.Z)(c,[["render",i],["__scopeId","data-v-eb716424"]]);var m=d,h={name:"App",watch:{$route:{immediate:!0,handler(t){document.title=t.meta.title||"Vue Loan Calculator"}}},methods:{lightMode(){const t=document.querySelector(":root");t.style.setProperty("--background-color","silver"),t.style.setProperty("--color","black"),t.style.setProperty("--hover-color","white"),t.style.setProperty("--background-hover","dimgray"),t.style.setProperty("--border","black"),t.style.setProperty("--nav-border","dimgray"),t.style.setProperty("--shadow-color","rgb(66, 68, 90)"),t.style.setProperty("--light-shadow","rgb(170, 170, 180)"),t.style.setProperty("--date-color","dimgray"),t.style.setProperty("--input-background","white")},darkMode(){const t=document.querySelector(":root");t.style.setProperty("--background-color","rgb(50, 50, 50)"),t.style.setProperty("--color","rgb(200, 200, 200)"),t.style.setProperty("--hover-color","black"),t.style.setProperty("--background-hover","silver"),t.style.setProperty("--border","rgb(200, 200, 200)"),t.style.setProperty("--nav-border","silver"),t.style.setProperty("--shadow-color","black"),t.style.setProperty("--light-shadow","rgb(80, 80, 80)"),t.style.setProperty("--date-color","gray"),t.style.setProperty("--input-background","black")}},computed:{checkForRoutes(){return"loans"===this.$route.name||"debts"===this.$route.name}},mounted:function(){const t=JSON.parse(window.localStorage.getItem("vue-loan-calc-theme"));null!==t?"dark"==t?this.darkMode():this.lightMode():window.matchMedia("(prefers-color-scheme: dark)").matches?this.darkMode():this.lightMode()},components:{NavBar:m}};const y=(0,u.Z)(h,[["render",a]]);var p=y,b=n(201);const g={class:"menu"};function v(t,e,n,o,a,s){const l=(0,r.up)("BtnContainer");return(0,r.wg)(),(0,r.iD)("div",g,[(0,r.Wm)(l)])}const f=t=>((0,r.dD)("data-v-2485ac50"),t=t(),(0,r.Cn)(),t),w={class:"button-container color background-color container"},k=f((()=>(0,r._)("h3",null,"Total balance:",-1)));function I(t,e,n,o,a,s){const l=(0,r.up)("TitleDiv"),i=(0,r.up)("MoneyCounter"),c=(0,r.up)("ButtonLink"),u=(0,r.up)("OutsideLink");return(0,r.wg)(),(0,r.iD)("div",w,[(0,r.Wm)(l),k,(0,r.Wm)(i,{counterData:s.loadData},null,8,["counterData"]),(0,r.Wm)(c,{link:"/loans",name:"Loans"}),(0,r.Wm)(c,{link:"/debts",name:"Debts"}),(0,r.Wm)(u,{link:"https://github.com/Piotrullllo/vue-loan-calculator",name:"Project's Github site"})])}var E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd1XVe53XvvD2eGQ/lXQcKuDwc2eFlCAGnUn7kT6T86J/+aNTgsWPchJJYciEOCQ8hF+G0hFCIHRSEqAuJBCqRaUEIEbmBppAIBGnESwZje8COZ+y587j3PLq+ffadGJix53HvPevcuz60xPjec89ZZ+39nf04+9vLSZKEFArFzHA1BAqFEkShUIIoFEoQhUIJolAoQRQKJYhCoQRRKJQgCoUSRKFQKEEUCiWIQrFo+Gv/8/YH+f/nsMWSHHMChyhxqPTTdyncWyJ3ScD/ztipiB3wXSqu6P17avN+TyFC5ggv4tRnmoxWTP1+5F+Mz17GPvPl49EKBWd3UsfXllPiso8VcYtmPba3fNuKrBVXrGFCbrdPwXndFL49ltI367roOpSUI4pGypv9s7q+ltj6JxqOQ07Bo/DgxGb2/a8cX0CnAWXJ5etz2TqdHiXHKlKj9w6i9XX8Ic41DmI8FVHhmmXk85MmRhCzJoiTWnig9LfJRHihgydxzAxJhBr7Bh/hK3yu+p9568FliTJF2aKMZfVd/kQOcKP6OBmS9+Rjm4zJ6faoeN0gOUn61MncLX4CJ+MRhe+P/dRxhfew2Df4CF/hs4jWg8vQYUKYMuWyRRkLjeHQ8YP0Z9mekVjA8Qj3VVcuoeDiXu63lkUE0ym6FA5PXBaNVr7qtPumGyPR4Bt8hK/wWUR5chn6XJYoU5StUHL8l+XEx2axhkS6yk+chJuP4rXLyOkIKJkS0B67adcqfL/0Y4pixxSysK6V8Yl9Mz7i3272NRFlhzJsu24Z5l9E9Ahmwfrpoj7uw3fZtktsRZKjIXnndlLxin7+W8ZTBwPf6I+Tg9HwxK2Ob8citbCoBoaxBxMCvsFH+CqjHCtUvLzflKWUcpwB91gupG5f9/Rtx39ZZBtmWyJtphKzHTQW0diP36b4aJmcLj/zGaSkHJPb4SWFi/tOJd8bTqd9s48VBRh4RKeUX/vjgXg8cpyCmz05xkJylxSoa8M5RF0eJaVIIkGOsg2yTc3UgpD94psiWxEOqDNYoOIXuHnGwE5AXUTFi46FTnRw4l/dwEm7/pSxcYnCF/gE3zInh52RRJkVP7/MlKFQcgCbjifHTAQBfsb2qsgBO3e1Cpf3UXBej3nRJKKrxU/rcH/pKzz4vNIQuRJTEmZklbg6EL4SPsE3GQPzinmfhbJDGQolB+r8w58abs5y8DqRt4ABeptLRR7koY9NleybEYw/MPisvF/ayT1/SvDewcnIcG32wfiCAbEvoCZyGaGsitdyz6XdTctQJq6fcT5mloNfYvu5yFZkpEz+RT0UrFoqpxVBV+vQxIrkaPnrbqdvXs6hcjbU+Jq4Nvvwd/BFRNeq2npwWfkX95iyE9p6PM72P/MhCPANTBSKu5WITHcC074Y9CUTkYglKBgcV/aVtlM5Kpp/RHFjDdfka7MP/2wG6m72661QNigjlBXKTGBtsjWKNs5atCf44Uds3xc5YD8Wknd2BxWuGjCzIxLWQzlFj+IjU108OL7bafM5sm5DDdfka/8T+9AJXyTMpqFsUEYoK5SZ0NbjVlvX500Q4Ha2A+JuCcEvhVS8qp/8MzspHhMSfO7mVPaP35BMRp9JsCQldbX+hmvxNfnamzJfqVvtWnGZoGxQRigroYs6UbfvOGHn4ORVkTaIbEWwtqg3MNO+Zql0JGCdVuCayhDuG9uJB7vp+oR17FbZc+NauCauLWLmKkqXr6NsUEYoK6GtxwY6CXXnEs0n2faIHLCPhhR8bikFKwRN+xZddHWu5a7Ol9yCZ2ZwHKdOxufGNeKRqS/hmnLWW1VMmQSrl5oyEkqOPbZu02IJAsic9sU7B+5uF9cOmqUfeLOdOaAZYb/CA+M/Ic9NxUoYMNfD/PT84f7xB807EAnrrbgMUBZt1w1SEpCIqfjF1Om5EuQNth0iu1r8tPLP76LCpX2yWpHDk2dGH018p6brtD5hOHf04cR3okOTZ0lqPVAW3gVdlMhdrfsTW6drRhDgRrYJcbeKZQxTkenvegNt6YBQwrQvOxG+P3ZHEia9TuClS9Br1XKge8XnxLlxjelzZ/2w4tijDMxyoHIsVQg1zvYPcy7KeZx4jG2zyFakFJF7Whu1XT2QvhfJeryeVNdplYPo4Pi9hKd7VVxVC8O5cH4+N65hXgoKuGfEHmWAskjGxI49Ntu6XHOCAD9ie1PcLSepjDNY00fB8m6KpSyJx/jgg9LfJEfLK40818w+LXY5e5zKaMfKl+DcIlSCZp0cd3U59igDI4+WOa2LunvfvDoD9RrcNLqAjDy3yzfrtKqbAkggSDIZmSlYxzz9a8BaJ101zF2rh3BuSTJaCKGMDEGujHbedXch0X2ebbdEkkDC6a9cQoWVguS53P0JP5xcHY1W/tppD9KxgrdAw5QxnwPn4nOukrPeqkzBJb0m9oJltLtt3a07QYD1IkMAeS7/hw0BXMhzJwXJc/eV7kuiyIN8OOGuUhLP06JUeoxz4FxiZLRouTsDM9WO2OdBRtsIgrzHtk3kgH00JO+cTipc2S9jqyCaluf2xwcnfuB6LndHuEsSzdP4N/gtzoFzSZHRIsaQQiPmidyXgttsnW0YQYDvsh2ROGBPxkMqXjNA/qlCFsnZ8UdlX+kfk0pymlnMWH2JOBfz0sWI+C3OMS1dzPphhPVWHOPC5wdMzIUOzFFHb1lwB2ARF+ZOPt0gshWBPLe/wCRZlu6CIkSei/cE0fD4g2ZbVWceyxH5WPwGvzXrrSTJaDnG7oBoGS3qaCULggCPsv1W5IAd8tzLllJwvpx1WthMIfyg9OVotHy1WVQ4V37wsfgNfkuSZLQcW8Q4lruU/RVbRykrggDXiwwN3uQWnXTa1xMkz2W/on2lndNajpNtAGePw2/MOicBMlqs+8K7GBNbjrFgGe2iX0nUgiAvs+0S2YpgndaFPVRc3SdmVanZlfGjifOiw5PrT/oGvPpG/vDkEH4jZ70Vt86rl5rYimmdP41/s3Uzc4Isup9XNxwvz+0tyNAlONPrtO6hctR+QnluKqNt52O3pxvtClhvxTH0egtmEwbBMlrUxU21OFGtCHKYbavIATv3j90z26kIea4QZRtahfhIuT0anrjH7O3rpjNVHzPIaLG3Lh8Tj5TbRQihjlNyehxTwTLarbZOiiEIcBfbPnGhMtroChXW9JN/VqeYdyPEY4nwwPj6ZCL8C1T+T61JhDqRv8MxZgwlJG2BxzEsrBmgeEzseqt9ti6SNIIA8t6wm901eFDZ66d7M4UkQ56LVgTTvvtKaRqFqoTWymjxGb6LpUzrImYcuzaOIWKJmAptPWpaB2sd+V+yvSB1wB6s7qXgwiUyBpbJdBqFq6MjU18mKCKhRsTyEbx558/wnRmYJzLiV+DYBat6JQ/MX7B1UCxBAKHy3IQrH6W7MhY9MWkUMNAN948/8Mm35/jMDIKlpC3gmBWQtsAjifkE61b36kGQP7DdL7KrVZXnXiYpjYKZxj09Gh7f4kB4yIa/8ZmU1brIIYiYIXaJ3Nbjflv3xBME+DZbSVwIzfIIK89dJkSea18Ihu+XflD9yPztCJnW5Ri5VRntpNh8giVb5ygvBIHu9yaRrchYRO6fFU0CSTPQlDLte6zshx9O3g3D3yJajySd4EDaAsQMsRPaetxk61zty+YTCXRqjf9jO19cOLnyYV+p8QffpcreMXJ7BeRgh77Ds6SIYhGbMBgB2tld1DW0nGL4VxbZfKBbdUHdhol1dl7mOi0MOjttGgWT11lAwU9r1mMSsX0oxwSxgYyWOvKXtiAvBPkV239I7GqZdVqX9FDw2V5+UoYipn2nt/WRMK3LMQlW9poYCZ7WfcrWsdwSBNggMrRYdcLdhjas0+q28lzJOc8bOU7jWLh2AwzEyLxclYm6Z2ZuBEE+YLtTZEVA9tzPdBh5biJ3q5rGD8yRjXbNAPkcm0RuyjTUqf3NQBDge2yHJFaGeDyi4tUD5J3WIXmzs8Y9NDgG3un80OCYIDZCHxqHbJ2iZiEIGmnB8twgzYIkd7vMxiBON59GLJyBQLKMdiM1qOPXyMn2f2f7X5EDdshzkUbhAtED0oZMXCAGiIXgtAW/YXusURdr9NsoufLcgmP20zKy2ErrNSNGRuunMUAshL7zABq61q/RBPkd2yNSn57+X3ZTQZA8t7H3H5p7RwwEt6KP2DrUtAQBIIUsiwt99Kf+tydFntuocVhVRltNWyBTRlumGslopRNkhO1mkRVlLCT3jHYzqyU48WSN+1ZWRou0BZDRyp3Ju9nWnaYnCHA3216JlQWy0gKy557dJSaNQn0nKNL1VrhnwTLavbbOUKsQBBApzzVpFHqsPFdIGoW6AfeG7cMwrcv3TC0io80LQZ5me07kU3WkYqSlhYvkpFGoz8C8bO7RyGjlpi14ztaVliMIIFOeizQKbpI+WdsDGfLcWvcmsaK53b4gdUW3lENZXjxrgrzNdq/IAftohbzzOql4eV/zjUUcu96K7w33KFhGi7rxVisTBEBSxWPiiqYqz71mGfmDQuS5tSIHstHyPZnd7+XKaI+RgKSxEggySWmKaXkVaSwi5xSbRmGiSdZpxVZGy/eEexMso73R1o2WJwiwk+11kQNZrNO6oo+Cc7vz39Wy07q4l+CKfnNvQu/ndVsnSAkifcCOAXq7R8W1y9JdRvI87QvfnTRtgdPeujLavBLkv9meEPnUHS2Tf1EPFT67lOKRnE77munrsrkH/+IeydPXqAO/VoLMDMhz5T2irTzXpFHoKeRPnluV0XYX0mlduTLamIRJtKUR5CDbbSIrGPfX/eUdVFyTQ3luku6OaNIW/HmH5LQFt9k6oAQ5Ab7PNiyxkmGndUhRvTNyJM9F1wrZaM9IZbQmG63MocewxIejRIKg+DaKbEXGI3KWBtT2hUFKyonUZeEfB3xkX4vsM3wXvIx/IwmMqCu0WH/B9qLIpzG6Wp/rpWBFj/x1WnaCAb4G7LPgad0XbZmTEmTukDnti0yzgZvKcwNPtDzXyGjZR5ONFincVEbbVAR5je0hkU/lkTL5F3TZzQ2EvjysJr1hH/0LuiVPTz9ky1oJsgB8iwQsN5hplISns5Hn9hXl9eurMlr2zUzrVsQuk5m0ZUxKkIXhKNsWkQN2yHNPhzx3WbqQMRZGYCOjXWZ8FDzjtsWWsRJkEfgh2zvyOvhWnovsucu75GTPtdlo4RN8i+W+s3nHli0pQRaPIXEeVeW53V46YJciz2Uf4IvxiX0juW/9h/JQ8fJCkGfZnpE5YK9QsHIJBZcIkOdW141d3Gt8EiyjfcaWqRKk6Z84kOc6duODjmzluUZGyz4g6Q18UhltaxHkXbbtIgfsRyvknQt5bobZc6dltP3Gl0SudmW7LUslSJ1mPUbFeWVUepDnDpB3SgazRtW0BXxt+ABfhE7rypyVbCKCTLF9U2QrgjQKg3b7zskGv3eI0+XsuDZ8EJy2YJMtQyVIHfEztldFDtghz728j4LzGphGoZq2gK9ZMDuwiH3ngTJ7OG+VLY8EAeTKc9ts9lwk42zEOi2st+JrYZIA1xYso12Xx4qWV4K8xPZzka3ISCrPDVY1YJ1WtfVYZWW0ctdbPW7LTAnSQHyDJCoykEYhTNdpuUsK6YDZqQ85cG5cw6y3CsWmLYBXG/NayfJMkI8oVR/KG7AfC8k7u4MKVw2kM1r1eB2RpDNXuAauJVhGe6stKyVIBrid7YA4r6o5N5BG4cxOI3mtaeWtymj53LiG4FwmKJs78lzB8k4QVIsN4ryqynN7AzP1ShXIc2tYg3GuSpJO6/aKltHK3KWmhQgCPMm2R+SAfTSkANlzV9Rw2rc6MDcyWtHZaPfYsiElSPaQOYVYiSnxiIprB8kpeGn+v8U2mZD8FjxzTpybKjqtqwQ5Od5g2yGyq4Xsued3UeHSvsW3IlUZLZ8L5xSctmCHLRMliCBgN/AJcV7F6SpbjBe8gUWkUaimLeBzmOUsU2JltOMkcbd+JQiNkYB8ErNVbPe0Nmq72i4kXMiwNUnfe+AcOJfgfCWbbVkoQQTiR2xvivPKynODNX0ULF9AGoVq2gL+Lc4hWEaL2N/XTBWq2Qgic3BYled2+ekeVfOV51az0WKNF59DsIx2XbNVpmYkyPNsuyWSBBJYf+USKsxHnlvNRsu/8WXLaHfb2CtBcoD1Ir2CPJf/wxSt2xmkupGT9c6QtoCPNdO66FfJldGub8aK1KwEeY9tm8gB+2hI3jmdVLii/+RbBdktfHAsfpPIfSm4zcZcCZIjfJftiMQBO1IQQBrrn3qCRYZ20SOOMTLacbHrrRDjW5q1EjUzQbiTTzeIbEUgz+232XNne59RfX+CbLT9omW0iHFFCZJPPMr2W5EDdshzL1tKwfkzrNOqrrfi73CMYBntKzbGpATJL64X6RXWZRVtxlnP+VgaBZO2wEu/wzGatkAJUk+8zLZLZCuCdVoXciux+rhVuXYVMD7Dd7Hc9Va7bGyVIE0Amf3kaXnuIHm9qTwXhr/xmWAZbUXk+E4JsmAcZtsqcsAOee6Z7VS08lwY/sZngmW0W21MlSBNhLvY9onzCqtIxipUuKqf3L6iMfyNz4RO6+6zsWwJ+NRawNvep8S1IhMxucie+8VT0o+6PIqPiB17rG+lCtNqBPkl2wts14gbsCONwqVLzT8Fr7d6wcawZeBS60Hm1GSSTu+a6d5EY6cEyQ5/YLtf4oCd4iQ1ma3H/TZ2SpAWwLfZSqSYK0o2ZqQEaQ1AN32T1vs54yYbMyVIC+GBVuwyLLBL+kCr3rzb4oV/vdZ/jZESZHb8iqS9F5GFp2yMlCAtjCENgcZGCTI79rPdqWH4FO60sVGCKOh7bIc0DNM4ZGNCShAFEFKOsyDVARttTJQgGoJpPMb2Gw2DicFjGgYlyExYpyHQGChBZsfv2B5p4ft/xMZAoQSZFZso3TKo1VC2965QgpwQI2w3t+B932zvXaEEOSnuZtvbQve7196zQgkyZ6zXe1UoQWbH02zPtcB9PmfvVaEEmTeG9B6VIIrZ8RbbvU18f/fae1QoQRYMJKU81oT3dYwkJj1VguQOk9REaY2Pw4323hRKkEVjJ9vrTXQ/r9t7UihBaobr9V6UIIrZ8Wu2J5rgPp6w96JQgtQcG2jmhGl5QWzvQaEEqQsOst2WY/9vs/egUILUtZIN59Dv4ZyTWwmSEyDnUx7luRtJar4qJUjT4RdsL+bI3xetzwolSMOwTn1Vgihmx2tsD+XAz4esrwolSMPxLZK9XGPS+qhQgmSCo2xbBPu3xfqoUIJkhh+yvSPQr3esbwolSOYYUp+UIIrZ8SzbM4L8ecb6pFCC6BNbWw8lSB7wLtt2AX5st74olCDikPWskfRZNSVIi2OKst2+c5P1QaEEEYuH2V7N4Lqv2msrlCDisa5FrqkEUSwIL7E93sDrPW6vqVCC5AaN0l/kVZ+iBGlxfMR2awOuc6u9lkIJkjvcwXagjuc/YK+hUILkEgnVdxeRDfYaCiVIbvEk2546nHePPbdCCZJ7rMvJORVKkEzwBtuOGp5vhz2nQgnSNMBu6uM1OM84Nedu80qQFscY1SYfx2Z7LoUSpOlwH9ubi/j9m/YcCiWIDth1YK4EaUU8z7Z7Ab/bbX+rUII0PdY36DcKJUgu8R7btnkcv83+RqEEaRncwnZkDscdsccqlCAthQrbDXM47gZ7rEIJ0nJ4lO2VE3z/ij1GoQRpWaxb4HcKJUhL4GW2XTN8vst+p1CCtDw+Oc6Y6/hEoQRpCRxm23rcv7fazxRKEIXFXZRuwBDZvxUC4GsIREHflguDkyQqaVYotIulUChBFAoliEKhBFEolCAKhRJEoVCCKBRKEIVCCaJQKJQgCoUSRKFQgigUShCFIhP8vwADACog5YM65zugAAAAAElFTkSuQmCC";const C=t=>((0,r.dD)("data-v-07fd78e3"),t=t(),(0,r.Cn)(),t),D=C((()=>(0,r._)("img",{alt:"Vue logo",src:E},null,-1))),R=C((()=>(0,r._)("h1",null,"ue Loan Calculator",-1))),N=[D,R];function S(t,e,n,o,a,s){return(0,r.wg)(),(0,r.iD)("header",null,N)}var W={name:"TitleDiv"};const Z=(0,u.Z)(W,[["render",S],["__scopeId","data-v-07fd78e3"]]);var P=Z,B=n(577);function z(t,e,n,o,a,s){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(l,{class:"btn",to:n.link},{default:(0,r.w5)((()=>[(0,r.Uk)((0,B.zw)(n.name),1)])),_:1},8,["to"])}var O={name:"ButtonLink",props:{name:String,link:String}};const G=(0,u.Z)(O,[["render",z],["__scopeId","data-v-55675fde"]]);var Q=G;function A(t,e,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h3",{style:(0,B.j5)(s.changeCounterColor)},(0,B.zw)(n.counterData.toFixed(2)),5)])}var U={name:"MoneyCounter",props:{counterData:Number},computed:{changeCounterColor(){let t;const e="#008800",n="#AA0000";return"loans"===this.$route.name&&this.counterData>0?t=e:"debts"===this.$route.name&&this.counterData>0?t=n:this.counterData>0?t=e:this.counterData<0&&(t=n),{color:t}}}};const V=(0,u.Z)(U,[["render",A],["__scopeId","data-v-60e461a2"]]);var M=V;const J=["href"];function Y(t,e,n,o,a,s){return(0,r.wg)(),(0,r.iD)("a",{class:"btn",href:n.link},(0,B.zw)(n.name),9,J)}var x={name:"OutsideLink",props:{name:String,link:String}};const L=(0,u.Z)(x,[["render",Y],["__scopeId","data-v-2966f0b5"]]);var j=L,K={name:"BtnContainer",components:{TitleDiv:P,ButtonLink:Q,MoneyCounter:M,OutsideLink:j},computed:{loadData(){let t;t=null===window.localStorage.getItem("vue-loan-calc-data")?{loans:[],debts:[]}:JSON.parse(window.localStorage.getItem("vue-loan-calc-data"));let e=0;return t.loans.forEach((t=>{e+=Number(t.money)})),t.debts.forEach((t=>{e-=Number(t.money)})),e}}};const T=(0,u.Z)(K,[["render",I],["__scopeId","data-v-2485ac50"]]);var X=T,F={name:"MenuView",components:{BtnContainer:X}};const H=(0,u.Z)(F,[["render",v]]);var q=H;function _(t,e,n,o,a,s){const l=(0,r.up)("EntriesContainer"),i=(0,r.up)("FormInputs");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{onRemEntry:s.removeEntry,loans:a.preparedLoans,debts:a.preparedDebts,countDat:a.counterData},null,8,["onRemEntry","loans","debts","countDat"]),(0,r.Wm)(i,{onEntryInfo:s.publishEntry},null,8,["onEntryInfo"])],64)}const $=t=>((0,r.dD)("data-v-3b81113f"),t=t(),(0,r.Cn)(),t),tt=["title"],et=$((()=>(0,r._)("input",{class:"submit-btn btn",type:"submit",value:"Add to list"},null,-1)));function nt(t,e,n,a,s,l){return(0,r.wg)(),(0,r.iD)("form",{class:(0,B.C_)([{"hide-form":s.isFormHidden},"form"]),onSubmit:e[3]||(e[3]=(...t)=>l.onSubmit&&l.onSubmit(...t))},[(0,r._)("a",{onClick:e[0]||(e[0]=(...t)=>l.hideForm&&l.hideForm(...t)),title:s.isFormHidden?"Show form":"Hide form",class:"hide-button btn",href:"javascript:void(0)"},[(0,r._)("span",{class:"arrow",style:(0,B.j5)(s.isFormHidden?"transform: rotate(180deg)":"transform: rotate(0deg)")},"▼",4)],8,tt),(0,r.wy)((0,r._)("input",{class:"name color input-background",id:"firstInput",maxlength:"40","onUpdate:modelValue":e[1]||(e[1]=t=>s.name=t),type:"text",required:"",placeholder:"Enter name"},null,512),[[o.nr,s.name]]),(0,r.wy)((0,r._)("input",{type:"number",class:"money color input-background","onUpdate:modelValue":e[2]||(e[2]=t=>s.money=t),min:"0.01",step:"0.01",required:"",placeholder:"Enter amount"},null,512),[[o.nr,s.money]]),et],34)}var ot={name:"FormInputs",data(){return{name:"",money:"",isFormHidden:!1}},methods:{onSubmit(t){if(t.preventDefault(),!/[a-zA-Z]/.test(this.name))return void alert("Name must contain letters!");if(this.name.length>40)return void alert("Name cannot be longer than 40 characters");if(this.money>99999.99)return void alert("Amount must be lower than 99999.99");if(this.money<=0)return void alert("Amount cannot be equal or lower than 0");const e={name:this.name,money:this.money.toFixed(2),date:new Date,route:this.$route.name};this.$emit("entry-info",e),this.name="",this.money="",document.getElementById("firstInput").focus()},hideForm(){const t="transform .3s",e=[document.querySelector(".arrow"),document.querySelector("form")];e.forEach((e=>{e.style.transition=t})),this.isFormHidden=!this.isFormHidden,setTimeout((()=>{e.forEach((t=>{t.style.transition="none"}))}),310)}},emits:["entry-info"]};const rt=(0,u.Z)(ot,[["render",nt],["__scopeId","data-v-3b81113f"]]);var at=rt;const st={class:"background-color color container"},lt={key:0},it={key:1},ct={key:2};function ut(t,e,n,o,a,s){const l=(0,r.up)("MoneyCounter"),i=(0,r.up)("SingleEntry");return(0,r.wg)(),(0,r.iD)("main",st,[(0,r._)("h3",null,(0,B.zw)(t.$route.name[0].toUpperCase()+t.$route.name.substring(1))+" total:",1),(0,r.Wm)(l,{counterData:n.countDat},null,8,["counterData"]),"loans"===t.$route.name&&n.loans.length>0?((0,r.wg)(),(0,r.iD)("div",lt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.loans,(t=>((0,r.wg)(),(0,r.j4)(i,{onRemovedEntry:s.emitEntry,key:t.id,entry:t},null,8,["onRemovedEntry","entry"])))),128))])):(0,r.kq)("",!0),"debts"===t.$route.name&&n.debts.length>0?((0,r.wg)(),(0,r.iD)("div",it,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.debts,(t=>((0,r.wg)(),(0,r.j4)(i,{onRemovedEntry:s.emitEntry,key:t.id,entry:t},null,8,["onRemovedEntry","entry"])))),128))])):(0,r.kq)("",!0),"loans"===t.$route.name&&0===n.loans.length||"debts"===t.$route.name&&0===n.debts.length?((0,r.wg)(),(0,r.iD)("p",ct,"The "+(0,B.zw)(t.$route.name)+" list is empty...",1)):(0,r.kq)("",!0)])}const dt={class:"entry-container"},mt={class:"data-container"},ht={class:"name"},yt={class:"money"},pt={class:"date"};function bt(t,e,n,o,a,s){return(0,r.wg)(),(0,r.iD)("div",dt,[(0,r._)("div",mt,[(0,r._)("p",ht,(0,B.zw)(n.entry.name),1),(0,r._)("p",yt,(0,B.zw)(n.entry.money),1),(0,r._)("p",pt,"Added: "+(0,B.zw)(new Date(this.entry.date)),1)]),(0,r._)("button",{class:"btn remove-btn",onClick:e[0]||(e[0]=(...t)=>s.removeEntry&&s.removeEntry(...t)),title:"Remove entry"},"X")])}var gt={name:"SingleEntry",props:{entry:Object},methods:{removeEntry(t){t.preventDefault();const e=this.entry.id,n=this.entry.route,o=this.entry.name,r=this.entry.money,a={id:e,route:n,name:o,money:r};this.$emit("removed-entry",a)}},emits:["removed-entry"]};const vt=(0,u.Z)(gt,[["render",bt],["__scopeId","data-v-111696c7"]]);var ft=vt,wt={name:"EntriesContainer",props:{loans:Array,debts:Array,countDat:Number},components:{SingleEntry:ft,MoneyCounter:M},methods:{emitEntry(t){this.$emit("rem-entry",t)}},emits:["rem-entry"]};const kt=(0,u.Z)(wt,[["render",ut],["__scopeId","data-v-b548bf7c"]]);var It=kt,Et={name:"LoanView",data(){return{preparedLoans:[],preparedDebts:[],counterData:0}},components:{FormInputs:at,EntriesContainer:It},methods:{publishEntry(t){let e;e=null===window.localStorage.getItem("vue-loan-calc-data")?{loans:[],debts:[]}:JSON.parse(window.localStorage.getItem("vue-loan-calc-data")),t.id=null,"loans"===t.route?e.loans.push(t):"debts"===t.route&&e.debts.push(t),window.localStorage.setItem("vue-loan-calc-data",JSON.stringify(e)),this.addIDs(),this.loadEntries()},addIDs(){const t=JSON.parse(window.localStorage.getItem("vue-loan-calc-data"));t.loans.forEach((e=>{e.id=t.loans.indexOf(e)})),t.debts.forEach((e=>{e.id=t.debts.indexOf(e)})),window.localStorage.setItem("vue-loan-calc-data",JSON.stringify(t))},removeEntry(t){let e;e=null===window.localStorage.getItem("vue-loan-calc-data")?{loans:[],debts:[]}:JSON.parse(window.localStorage.getItem("vue-loan-calc-data")),confirm('Are you sure you want to remove ""'+t.name+" - "+t.money+'" entry?')&&("loans"===t.route?e.loans=e.loans.filter((e=>e.id!==t.id)):e.debts=e.debts.filter((e=>e.id!==t.id)),window.localStorage.setItem("vue-loan-calc-data",JSON.stringify(e)),this.loadEntries())},loadEntries(){null===window.localStorage.getItem("vue-loan-calc-data")?this.downloadedData={loans:[],debts:[]}:this.downloadedData=JSON.parse(window.localStorage.getItem("vue-loan-calc-data")),this.downloadedData&&(this.preparedLoans=[...this.downloadedData.loans],this.preparedDebts=[...this.downloadedData.debts]),this.reloadCounter()},reloadCounter(){this.counterData=0,"loans"===this.$route.name?this.preparedLoans.forEach((t=>{this.counterData+=Number(t.money)})):this.preparedDebts.forEach((t=>{this.counterData+=Number(t.money)}))}},mounted:function(){this.loadEntries()}};const Ct=(0,u.Z)(Et,[["render",_]]);var Dt=Ct;const Rt=[{path:"/",redirect:"/menu"},{path:"/menu",name:"menu",component:q},{path:"/loans",name:"loans",component:Dt},{path:"/debts",name:"debts",component:Dt}],Nt=(0,b.p7)({history:(0,b.r5)(),routes:Rt});var St=Nt;(0,o.ri)(p).use(St).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],a=t[u][2];for(var l=!0,i=0;i<o.length;i++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[i])}))?o.splice(i--,1):(l=!1,a<s&&(s=a));if(l){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,r,a]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,s=o[0],l=o[1],i=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var u=i(n)}for(e&&e(o);c<s.length;c++)a=s[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkvue_loan_calculator"]=self["webpackChunkvue_loan_calculator"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(415)}));o=n.O(o)})();
//# sourceMappingURL=app.9cba8074.js.map