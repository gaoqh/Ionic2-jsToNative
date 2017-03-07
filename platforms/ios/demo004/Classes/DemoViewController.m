//
//  DemoViewController.m
//  demo004
//
//  Created by 高庆华 on 2017/3/7.
//
//

#import "DemoViewController.h"

@interface DemoViewController ()

@end

@implementation DemoViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.navigationItem.title = @"我是原生界面";
    
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.backgroundColor = [UIColor blueColor];
    [btn setTitle:@"返回ionic并跳转" forState:UIControlStateNormal];
    [btn setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
    [btn addTarget:self action: @selector(btnClick)  forControlEvents: UIControlEventTouchUpInside];
    [self.view addSubview:btn];
    
    btn.frame = CGRectMake(50, 200, 200, 50);
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (void)btnClick {
    NSDictionary*userInfo = @{@"key": @"value"};
    [self dismissViewControllerAnimated:true completion:^{
        [[NSNotificationCenter defaultCenter] postNotificationName:@"nativeToJs" object:nil userInfo: userInfo];
    }];
}


@end
