<script>
                                                $(document).ready(function() {
                                                                get_results();
                                                });
                                                function get_results()
                                                {
                                                                $.getJSON('https://api.govwizely.com/v2/trade_articles/search?api_key=-DgaM8IefU4280JDV36SHZC1&size=100', function(d)
                                                                {
                                                                                $("#results_container_articles").empty();
                                                                                for (x in d.results)
                                                                                {
                                                                                                row = '<div class="list-group" id="result_' + x + '"><a href="#" class="list-group-item"> <h4 class="result_seo_metadata_title">' + d.results[x].seo_metadata_title + '</h4><p class="result_seo_metadata_description">' + d.results[x].seo_metadata_description + '</p></a>'
                                                                                                if (x < d.results.length-1)
                                                                                                {
                                                                                                                row = row ;
                                                                                                }
                                                                                                row = row + "</div>";
                                                                                                $("#results_container_articles").append(row);
                                                                                                
                                                                                }
                                                                               
                                                                });
                                                }
                                </script>